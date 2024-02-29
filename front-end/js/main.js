const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      toDoElements: [],
      newToDoElement: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    fetchtoDoElements() {
      axios.get("../back-end/api/get-list.php").then((response) => {
        this.toDoElements = response.data.toDoElements;
      });
    },
    //   invertStatus(i) {
    //     this.toDoElements[i].done = !this.toDoElements[i].done;
    //   },
    //   delateToDoElement(i) {
    //     this.toDoElements.splice(i, 1);
    //   },
    //   addNewToDoElement() {
    //     const newToDoElements = { ...this.newToDoElement };
    //     if (this.newToDoElement.text != "") {
    //       this.toDoElements.push(newToDoElements);
    //       this.newToDoElement.text = "";
    //     } else {
    //       alert("Attenzione! Non hai dato un nome alla nuova task");
    //     }
    //   },
  },
  mounted() {
    this.fetchtoDoElements();
  },
});

app.mount("#app");
