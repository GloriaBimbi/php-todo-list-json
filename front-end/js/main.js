const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      toDoElements: [
        {
          text: "Fare la spesa",
          done: false,
        },
        {
          text: "Studiare per interrogazione",
          done: false,
        },
        {
          text: "Pulire casa",
          done: false,
        },
        {
          text: "Cucinare la cena",
          done: false,
        },
        {
          text: "Lavare i piatti sporchi",
          done: false,
        },
        {
          text: "Rispondere alle e-mail",
          done: false,
        },
      ],

      newToDoElement: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    invertStatus(i) {
      this.toDoElements[i].done = !this.toDoElements[i].done;
    },
    delateToDoElement(i) {
      this.toDoElements.splice(i, 1);
    },
    addNewToDoElement() {
      const newToDoElements = { ...this.newToDoElement };
      if (this.newToDoElement.text != "") {
        this.toDoElements.push(newToDoElements);
        this.newToDoElement.text = "";
      } else {
        alert("Attenzione! Non hai dato un nome alla nuova task");
      }
    },
  },
  mounted() {},
});

app.mount("#app");
