<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <app-sidebar></app-sidebar>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <app-header></app-header>

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->

          <transition name="fade" mode="out-in" @before-enter="beforeEnter" appear>
            <router-view :key="routeKey"></router-view>
          </transition>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <app-footer></app-footer>
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
import Header from "./template/Header.vue";
import Sidebar from "./template/Sidebar.vue";
import Footer from "./template/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appSidebar: Sidebar,
    appFooter: Footer
  },
  methods: {
    beforeEnter() {
      this.$root.$emit("scrollBeforeEnter");
    }
  },
  computed: {
    routeKey() {
      const keyBuilder = this.$route.matched[0].meta.keyBuilder;
      return keyBuilder ? keyBuilder(this.$route) : this.$route.path;
    }
  },
  mounted: function() {
    !(function(t) {
      "use strict";
      t("#sidebarToggle, #sidebarToggleTop").on("click", function(o) {
        t("body").toggleClass("sidebar-toggled"),
          t(".sidebar").toggleClass("toggled"),
          t(".sidebar").hasClass("toggled") &&
            t(".sidebar .collapse").collapse("hide");
      }),
        t(window).resize(function() {
          t(window).width() < 768 && t(".sidebar .collapse").collapse("hide");
        }),
        t("body.fixed-nav .sidebar").on(
          "mousewheel DOMMouseScroll wheel",
          function(o) {
            if (768 < t(window).width()) {
              var e = o.originalEvent,
                l = e.wheelDelta || -e.detail;
              (this.scrollTop += 30 * (l < 0 ? 1 : -1)), o.preventDefault();
            }
          }
        ),
        t(document).on("scroll", function() {
          100 < t(this).scrollTop()
            ? t(".scroll-to-top").fadeIn()
            : t(".scroll-to-top").fadeOut();
        }),
        t(document).on("click", "a.scroll-to-top", function(o) {
          var e = t(this);
          t("html, body")
            .stop()
            .animate(
              { scrollTop: t(e.attr("href")).offset().top },
              1e3,
              "easeInOutExpo"
            ),
            o.preventDefault();
        });
    })(jQuery);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

