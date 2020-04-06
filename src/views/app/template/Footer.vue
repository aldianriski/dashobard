<template>
  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright &copy; Your Website 2019</span>
      </div>
    </div>
    <a class="scroll-to-top rounded" href="#page-top" @click="showMore">
      <i class="fas fa-angle-up"></i>
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    showMore() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>
