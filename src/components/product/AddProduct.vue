<template>
  <div @click="addProduct" class="addProduct">+</div>
</template>
<style>
.addProduct {
  margin: 5px;
  width: 200px;
  height: 200px;
  display: flex;
  background-color: white;
  background: linear-gradient(
    62deg,
    rgba(113, 111, 180, 1) 0%,
    rgba(42, 162, 181, 0.47942927170868344) 50%,
    rgba(113, 111, 180, 1) 100%
  );
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
</style>
<script>
import axios from "axios";
export default {
  methods: {
    async addProduct() {
      const saveObject = {
        title: "Duş Jeli",
        created_at: new Date(),
        price: 1000,
      };
      await axios
        .post("http://localhost:3000/product", saveObject)
        .then((save_response) => {
          console.log(save_response);
          //   this.provideProduct.productData.push(saveObject);
        });
      axios.get("http://localhost:3000/product").then((items_response) => {
        this.provideProduct.productData = items_response.data || [];
      });
    },
  },
  inject: ["provideProduct"],
};
</script>
