<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  el: "#app",
  data: {
    editor: ClassicEditor,
    editorConfig: {
      toolbar: [
        "fontSize",
        "|",
        "bold",
        "italic",
        "underline",
        "fontColor",
        "|",
        "alignment",
        "bulletedList",
        "numberedList",
        "outdent",
        "indent",
        "link",
        "|",
        "strikethrough"
      ]
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@font-face {
  font-family: "Gotham";
  src: url("assets/Gotham.ttf");
}
html {
  zoom: 80%;
}
#app {
  font-family: "Gotham";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.modal-backdrop {
  opacity: 0.5 !important;
  zoom: 150%;
}
#wrapper #content-wrapper #content {
  min-height: 47rem;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.btn-primary {
  color: #fff;
  background-color: #6051a2;
  border-color: #6051a2;
}
.btn-primary:hover {
  color: #fff;
  background-color: #221463;
  border-color: #221463;
}
.btn-primary.focus,
.btn-primary:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(34, 20, 99, 1);
  box-shadow: 0 0 0 0.2rem rgba(34, 20, 99, 1);
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #6051a2;
  border-color: #6051a2;
}
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #6051a2;
  border-color: #6051a2;
}
.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(34, 20, 99, 1);
  box-shadow: 0 0 0 0.2rem rgba(34, 20, 99, 1);
}
.btn-outline-primary {
  color: #6051a2;
  border-color: #6051a2;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #6051a2;
  border-color: #6051a2;
}
.btn-danger {
  color: #fff;
  background-color: #ff434f;
  border-color: #ff434f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c1000e;
  border-color: #c1000e;
}
.btn-danger.focus,
.btn-danger:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(193, 0, 14, 1);
  box-shadow: 0 0 0 0.2rem rgb(193, 0, 14, 1);
}
.btn-danger.disabled,
.btn-danger:disabled {
  color: #fff;
  background-color: #ff434f;
  border-color: #ff434f;
}
.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:not(:disabled):not(.disabled):active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #ff434f;
  border-color: #ff434f;
}
.btn-danger:not(:disabled):not(.disabled).active:focus,
.btn-danger:not(:disabled):not(.disabled):active:focus,
.show > .btn-danger.dropdown-toggle:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(193, 0, 14, 1);
  box-shadow: 0 0 0 0.2rem rgba(193, 0, 14, 1);
}
.btn-warning {
  color: #fff;
  background-color: #ffaf03;
  border-color: #ffaf03;
}
.btn-warning:hover {
  color: #fff;
  background-color: #c78800;
  border-color: #c78800;
}
.btn-warning.focus,
.btn-warning:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(199, 136, 0, 1);
  box-shadow: 0 0 0 0.2rem rgba(199, 136, 0, 1);
}
.btn-warning.disabled,
.btn-warning:disabled {
  color: #fff;
  background-color: #ffaf03;
  border-color: #ffaf03;
}
.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show > .btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #ffaf03;
  border-color: #ffaf03;
}
.btn-warning:not(:disabled):not(.disabled).active:focus,
.btn-warning:not(:disabled):not(.disabled):active:focus,
.show > .btn-warning.dropdown-toggle:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(199, 136, 0, 1);
  box-shadow: 0 0 0 0.2rem rgba(199, 136, 0, 1);
}
.btn-success {
  color: #fff;
  background-color: #7ed321;
  border-color: #7ed321;
}
.btn-success:hover {
  color: #fff;
  background-color: #478800;
  border-color: #478800;
}
.btn-success.focus,
.btn-success:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(71, 136, 0, 1);
  box-shadow: 0 0 0 0.2rem rgba(71, 136, 0, 1);
}
.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #7ed321;
  border-color: #7ed321;
}
.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #7ed321;
  border-color: #7ed321;
}
.btn-success:not(:disabled):not(.disabled).active:focus,
.btn-success:not(:disabled):not(.disabled):active:focus,
.show > .btn-success.dropdown-toggle:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(71, 136, 0, 1);
  box-shadow: 0 0 0 0.2rem rgba(71, 136, 0, 1);
}
.btn-info {
  color: #fff;
  background-color: #4a90e2;
  border-color: #4a90e2;
}
.btn-info:hover {
  color: #fff;
  background-color: #0c61c8;
  border-color: #0c61c8;
}
.btn-info.focus,
.btn-info:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(12, 97, 200, 1);
  box-shadow: 0 0 0 0.2rem rgba(12, 97, 200, 1);
}
.btn-info.disabled,
.btn-info:disabled {
  color: #fff;
  background-color: #4a90e2;
  border-color: #4a90e2;
}
.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #4a90e2;
  border-color: #4a90e2;
}
.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus,
.show > .btn-info.dropdown-toggle:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(12, 97, 200, 1);
  box-shadow: 0 0 0 0.2rem rgba(12, 97, 200, 1);
}

.text-primary {
  color: #6051a2 !important;
}

a.text-primary:hover,
a.text-primary:focus {
  color: #221463 !important;
}

.text-danger {
  color: #ff434f !important;
}

a.text-danger:hover,
a.text-danger:focus {
  color: #c1000e !important;
}
.text-warning {
  color: #ffaf03 !important;
}

a.text-warning:hover,
a.text-warning:focus {
  color: #c78800 !important;
}
.text-success {
  color: #7ed321 !important;
}

a.text-success:hover,
a.text-success:focus {
  color: #478800 !important;
}
.text-info {
  color: #4a90e2 !important;
}

a.text-info:hover,
a.text-info:focus {
  color: #0c61c8 !important;
}
.bg-primary {
  background-color: #6051a2 !important;
}

a.bg-primary:hover,
a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
  background-color: #221463 !important;
}
.bg-danger {
  background-color: #ff434f !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #c1000e !important;
}
.bg-warning {
  background-color: #ffaf03 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #c78800 !important;
}
.bg-success {
  background-color: #7ed321 !important;
}

a.bg-success:hover,
a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #478800 !important;
}
.bg-info {
  background-color: #0c61c8 !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0c61c8 !important;
}

.border-left-primary {
  border-left: 0.25rem solid #6051a2 !important;
}

.border-bottom-primary {
  border-bottom: 0.25rem solid #6051a2 !important;
}

.border-left-success {
  border-left: 0.25rem solid #7ed321 !important;
}

.border-bottom-success {
  border-bottom: 0.25rem solid #7ed321 !important;
}

.border-left-info {
  border-left: 0.25rem solid #0c61c8 !important;
}

.border-bottom-info {
  border-bottom: 0.25rem solid #0c61c8 !important;
}

.border-left-warning {
  border-left: 0.25rem solid #ffaf03 !important;
}

.border-bottom-warning {
  border-bottom: 0.25rem solid #ffaf03 !important;
}

.border-left-danger {
  border-left: 0.25rem solid #ff434f !important;
}

.border-bottom-danger {
  border-bottom: 0.25rem solid #ff434f !important;
}
.badge-primary {
  color: #fff;
  background-color: #6051a2;
}

a.badge-primary:hover,
a.badge-primary:focus {
  color: #fff;
  background-color: #221463;
}

a.badge-primary:focus,
a.badge-primary.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(34, 20, 99, 1);
  box-shadow: 0 0 0 0.2rem rgba(34, 20, 99, 1);
}

.badge-success {
  color: #fff;
  background-color: #7ed321;
}

a.badge-success:hover,
a.badge-success:focus {
  color: #fff;
  background-color: #478800;
}

a.badge-success:focus,
a.badge-success.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(71, 136, 0, 1);
  box-shadow: 0 0 0 0.2rem rgba(71, 136, 0, 1);
}

.badge-info {
  color: #fff;
  background-color: #0c61c8;
}

a.badge-info:hover,
a.badge-info:focus {
  color: #fff;
  background-color: #0c61c8;
}

a.badge-info:focus,
a.badge-info.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(12, 97, 200, 1);
  box-shadow: 0 0 0 0.2rem rgba(12, 97, 200, 1);
}

.badge-warning {
  color: #fff;
  background-color: #ffaf03;
}

a.badge-warning:hover,
a.badge-warning:focus {
  color: #fff;
  background-color: #c78800;
}

a.badge-warning:focus,
a.badge-warning.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(199, 136, 0, 1);
  box-shadow: 0 0 0 0.2rem rgba(199, 136, 0, 1);
}

.badge-danger {
  color: #fff;
  background-color: #ff434f;
}

a.badge-danger:hover,
a.badge-danger:focus {
  color: #fff;
  background-color: #c1000e;
}

a.badge-danger:focus,
a.badge-danger.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(193, 0, 14, 1);
  box-shadow: 0 0 0 0.2rem rgba(193, 0, 14, 1);
}
.off {
  pointer-events: none;
}
.status {
  max-width: 100px;
}
.tnc1 {
  width: 20%;
}
.tnc2 {
  width: 40%;
}
.bg-light {
  background-color: #fff !important;
}
a.bg-light:focus,
a.bg-light:hover,
button.bg-light:focus,
button.bg-light:hover {
  background-color: #fff !important;
}
.sidebar-light .sidebar-brand {
  color: #6e707e;
}
.sidebar-light hr.sidebar-divider {
  border-top: 1px solid #eaecf4;
}
.sidebar-light .sidebar-heading {
  color: #b7b9cc;
}
.sidebar-light .nav-item .nav-link {
  color: #999;
}
.sidebar-light .nav-item .nav-link i {
  color: #999;
}
.sidebar-light .nav-item .nav-link:active,
.sidebar-light .nav-item .nav-link:focus,
.sidebar-light .nav-item .nav-link:hover {
  color: #000;
}
.sidebar-light .nav-item .nav-link:active i,
.sidebar-light .nav-item .nav-link:focus i,
.sidebar-light .nav-item .nav-link:hover i {
  color: #000;
}
.sidebar-light .nav-item .nav-link[data-toggle="collapse"]::after {
  color: #b7b9cc;
}
.sidebar-light .nav-item.active .nav-link {
  color: #6e707e;
}
.sidebar-light .nav-item.active .nav-link i {
  color: #6e707e;
}
.sidebar-light #sidebarToggle {
  background-color: #eaecf4;
}
.sidebar-light #sidebarToggle::after {
  color: #b7b9cc;
}
.sidebar-light #sidebarToggle:hover {
  background-color: #dddfeb;
}
.bg-gradient-light {
  background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(10%, #fff),
    to(#fff)
  );
  background-image: linear-gradient(180deg, #fff 10%, #fff 100%);
  background-size: cover;
}
.border-secondary {
  border-color: #d1d3e2 !important;
}
.btn:hover {
  color: #fff;
  text-decoration: none;
}
.btn.focus,
.btn:focus {
  outline: none;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255);
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255);
}
.sidebar .sidebar-brand {
  height: 4.375rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  padding: 1.5rem 1rem;
  text-align: center;
  text-transform: none;
  letter-spacing: 0.05rem;
  z-index: 1;
}
.sidebar-light .nav-item.active .nav-link {
  color: #6051a2;
}
.border-right-active {
  border-right: 0.25rem solid #ff434f !important;
  background-color: #f9f9fc;
}
.border-right-active-dropdown {
  background-color: #f9f9fc;
}
.sidebar-light .nav-item .nav-link:active,
.sidebar-light .nav-item .nav-link:focus,
.sidebar-light .nav-item .nav-link:hover {
  color: #6051a2;
}
.sidebar .nav-item .collapse .collapse-inner .collapse-item.active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item.active {
  color: #6051a2;
  font-weight: 700;
}
.sidebar .nav-item .collapse .collapse-inner .collapse-item,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item {
  padding: 1rem 0.75rem 1rem 3.7rem;
  margin: 0rem 0rem;
  display: block;
  color: #999;
  text-decoration: none;
  border-radius: 0;
  white-space: nowrap;
  position: relative;
}
.sidebar .nav-item .collapse .collapse-inner,
.sidebar .nav-item .collapsing .collapse-inner {
  padding: 0px 0px;
  min-width: 10rem;
  font-size: 0.85rem;
  margin: -4px -17px 0rem -19px;
}
.sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover {
  background-color: #f9f9fc;
  color: #6051a2;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #000;
  background-color: transparent;
  border-bottom-color: #6051a2;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
}
.nav-tabs .nav-link {
  border: 3px solid transparent;
  border-top-left-radius: 0.35rem;
  border-top-right-radius: 0.35rem;
}
a {
  color: #929293;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #000;
}
.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #ffb003;
}
.calender-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.img-calender-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.del-calender-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.dropdown-toggle::after {
  margin-left: 10px;
}
.noHover {
  pointer-events: none;
}
.form-group.required .control-label:after {
  content: "*";
  color: red;
}
.ck-editor__editable_inline {
  max-height: 300px;
}
.order-link {
  color: #968cc2 !important;
  pointer-events: none;
}
.vue-form-wizard .wizard-nav-pills > li.active > a .wizard-icon,
.vue-form-wizard .wizard-nav-pills > li.active > a:focus .wizard-icon,
.vue-form-wizard .wizard-nav-pills > li.active > a:hover .wizard-icon {
  color: #fff;
}
</style>
