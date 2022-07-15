export default (await import('vue')).defineComponent({
props: {
item_data: {
type: Object,
default: () => { }
}
},
data() {
return {};
}
});
