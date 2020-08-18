<script>
import _ from "lodash";
const needOptions = ["checkbox", "radio", "select"];
const ArrayProp = ["checkbox"];
const BooleanProp = [];
const NumberProp = [];
let checkSupport = i => !!(_.isFunction(i) ? i() : i);
export default {
  render(h) {
    let _this = this;
    let dpo = item => ({
      props: {
        value: _this.selfModel[item.prop],
        disabled: item.disabled,
        ...item.props
      },
      on: {
        input(value) {
          _this.selfModel = {
            model: _.defaults({ [item.prop]: value }, _this.selfModel),
            item
          };
        }
      },
      attrs: {
        ..._.pick(item.props, ["placeholder"])
      }
    });
    let formItems = _.map(this.data, item => {
      //show支持函数
      if (item.show !== undefined && !checkSupport(item.show)) return h();
      let input;
      let children = [];
      switch (true) {
        case item.type === "radio":
        case item.type === "checkbox":
          input = h(
            `cmui-${item.type}-group`,
            _.merge(dpo(item), {
              class: {
                group: item.group
              }
            }),
            _.map(_.isFunction(item.options) ? item.options() : item.options, (value, label) => {
              let extprop = {};
              if (_.isPlainObject(value)) {
                extprop = _.omit(value, ["value", "label"]);
                ({ value, label } = value);
              }
              return h(
                `cmui-${item.type}`,
                {
                  props: { label: value, value, name: item.prop, ...extprop }
                },
                label
              );
            })
          );
          break;
        case item.type === "select":
          input = h(
            "cmui-select",
            _.merge(dpo(item), {
              props: {
                data: _.map(_.isFunction(item.options) ? item.options() : item.options, (value, label) => {
                  if (_.isPlainObject(value)) {
                    ({ value, label } = value);
                  }
                  return { text: label, value };
                })
              }
            })
          );
          break;
        case item.type === "textarea":
          input = h("cmui-textarea", _.merge(dpo(item), {}));
          break;
        default:
          input = h("cmui-input", _.merge(dpo(item), {}));
      }
      children.push(input);
      return h(
        "cmui-form-item",
        {
          props: item,
          class: `item__${item.type || "input"}`
        },
        children
      );
    });
    let form = h(
      "cmui-form",
      {
        props: {
          labelWidth: this.labelWidth,
          model: this.selfModel,
          rules: this.selfRules,
          inline: this.inline,
          disabled: _.isFunction(this.disabled) ? this.disabled() : this.disabled
        },
        ref: "form"
      },
      formItems
    );
    return form;
  },
  props: {
    labelWidth: { type: String, default: "80px" },
    data: { type: Array, default: () => [] },
    value: { type: Object, default: () => ({}) },
    disabled: { type: [Boolean, Function], default: false }
  },
  data() {
    return {
      defaultData: {},
      model: {}
    };
  },
  computed: {
    selfRules() {
      return _(this.data)
        .filter("rules")
        .keyBy("prop")
        .mapValues("rules")
        .value();
    },
    selfModel: {
      get() {
        let rs = _(this.data)
          .filter("prop")
          .keyBy("prop")
          .mapValues(item => {
            let value = this.value[item.prop];
            if (value === undefined) {
              switch (true) {
                case ArrayProp.includes(item.type):
                  value = [];
                  break;
                case BooleanProp.includes(item.type):
                  value = false;
                  break;
                case NumberProp.includes(item.type):
                  value = 0;
                  break;
                default:
                  value = "";
              }
            }
            return value;
          })
          .value();
        _.defaults(this.defaultData, rs);
        return rs;
      },
      set({ model, item }) {
        let { prop } = item;
        let oldValue = this.selfModel[prop];
        let newValue = model[prop];
        let fnRS;
        if (_.isFunction(item.change) && newValue !== oldValue) {
          fnRS = item.change(newValue, oldValue);
        }
        fnRS !== false && this.$emit("input", model);
      }
    }
  },
  methods: {
    validate() {
      let rs;
      this.$refs.form.validate(valid => (rs = valid));
      return rs;
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(data) {
        data.forEach(item => {
          needOptions.includes(item.type) && _.isEmpty(item.options) && this.$set(item, "options", []);
          // needExtValue_arr.includes(item.type) && !item._value && this.$set(item, "_value", []);
          // needExtValue_str.includes(item.type) && !item._value && this.$set(item, "_value", "");
        });
      }
    }
  }
};
</script>
