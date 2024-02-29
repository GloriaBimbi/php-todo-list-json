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
    invertStatus(i) {
      const clickedElement = { ...this.toDoElements[i] };

      //definisco i parametri che poi passerò nella richiesta axios e li inserisco all'inteno di una varibaile
      const data = {
        clickedElement,
      };
      //creo una variabile che contiene le indicazioni per l'interstazione della richiesta axios
      const params = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      axios
        .post("../back-end/api/change-status.php", data, params)
        .then((response) => {
          this.toDoElements = response.data.toDoElements;
        });
    },
    // delateToDoElement(i) {
    //   this.toDoElements.splice(i, 1);
    // },
    addNewToDoElement() {
      const newElement = { ...this.newToDoElement };
      console.log("Item da aggiungere: " + newElement.text);
      if (this.newToDoElement.text != "") {
        //definisco i parametri che poi passerò nella richiesta axios e li inserisco all'inteno di una varibaile
        const data = {
          newElement,
        };
        //creo una variabile che contiene le indicazioni per l'interstazione della richiesta axios
        const params = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        // faccio una richiesta axios sfruttando le variabili vcreate in precedenza per scriverla in maniera più chiara
        axios
          .post("../back-end/api/store-item.php", data, params)
          .then((response) => {
            this.toDoElements = response.data.toDoElements;
          });
      } else {
        alert("Attenzione! Non hai dato un nome alla nuova task");
      }
      this.newToDoElement.text = "";
    },
  },
  mounted() {
    this.fetchtoDoElements();
  },
});

app.mount("#app");
