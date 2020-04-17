<script>
export default {
  name: "bookingModal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h1>Manage A Booking</h1>
        <h2 class="options">...</h2>
      </header>
      <div class="split-bar"></div>
      <section class="modal-body">
        <div class="modal-cust"></div>
        <div class="modal-notes"></div>
        <div class="modal-staff"></div>
        <div class="modal-booking"></div>
      </section>
      <footer class="modal-footer">
        <button type="button" class=" btn-close" @click="close">
          Save and Close
        </button>
      </footer>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  width: 80vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
}

.btn-close {
  border: 1px solid #4aae9b;
  border-radius: 2px;
  font-size: 20px;
  padding: 6px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: #4aae9b;
}
.modal-cust {
}
</style>
