<script>
  export default {
    name: 'modal',
    props: ['title'],
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription" >
        <form>
             <header
                class="modal-header"
                id="modalTitle">
                <slot name="header">
                  Add {{title}} Link
                  <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal" >
                    x
                  </button>
                </slot>
              </header>
              <section
                class="modal-body"
                id="modalDescription">
                <slot name="body">
                  <input type="url" placeholder="Enter Link"/>
                   <button class="btn btn-dark" type="submit">Add</button>

                </slot>
              </section>
        </form>
     
    
      </div>
    </div>
  </transition>
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

  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    font-size: clamp(10px,5vw,20px);
    display: flex;
    width: 100vw;
    height: 25%;
    flex-direction: column;

  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>