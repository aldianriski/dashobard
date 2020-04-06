<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <!-- <button id="sidebarToggleTop" class="btn btn-link d-md-none text-black rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>-->

    <!-- Topbar Search -->
    <button class="btn bg-white border-0" id="sidebarToggle">
      <img src="@/assets/ic-menu.svg" alt />
    </button>
    <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
    >
      <div class="input-group">
        <input
          type="text"
          class="form-control border-1 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary border-secondary bg-white py-0" type="button">
            <img src="@/assets/ic-search.svg" alt />
          </button>
        </div>
      </div>
      <!-- {{header_name}}
      <br />
      <b>{{session.fullname}}</b>-->
    </form>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src="@/assets/ic-search.svg" alt />
        </a>
        <!-- Dropdown - Messages -->
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-1 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-secondary border-secondary bg-white py-0" type="button">
                  <img src="@/assets/ic-search.svg" alt />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      <form class="d-none d-sm-inline-block form-inline no-arrow mx-1 navbar-search mt-3"></form>
      <img src="@/assets/ic-paxel-credit.svg" alt />
      <label class="mt-4 ml-1">500.000</label>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            class="img-profile rounded-circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTmgnKfIgYci_yoW5_OHoPXjNi7gHzPb2gPkX-LOCdLKiGPwu"
          />
          &nbsp;
          <span class="mr-2 d-none d-lg-inline text-primary small">
            <!-- <b>{{session.fullname}}</b> -->
            <b>ADMIN</b>
          </span>
          &nbsp;
          <i class="fas fa-sort-down"></i>
        </a>

        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <router-link to="/profile" class="dropdown-item">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </router-link>
          <!-- <router-link to="/profile" v-show="session.role == 'super_admin'" class="dropdown-item">
            <i class="fas fa-user-plus fa-sm fa-fw mr-2 text-gray-400"></i>
            Add User
          </router-link>-->
          <div class="dropdown-divider"></div>
          <b-link @click="logout()" class="dropdown-item">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </b-link>
        </div>
      </li>
    </ul>
  </nav>
  <!-- End of Topbar -->
</template>

<script>
export default {
  data() {
    return {
      header_name: "",
      session: this.$session.get("jwt")
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
      // this.$swal({
      //   title: "Are you sure?",
      //   text: "Want to logout?",
      //   type: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes"
      // }).then(result => {
      //   if (result.value) {
      //     this.$swal("See you next time", "Thx for using CMS Revamp 2.0");
      //     this.$store.dispatch("destroyToken").then(response => {
      //       this.$session.destroy();
      //     });
      //   }
      // });
    }
  },
  created() {
    this.header_name = process.env.VUE_APP_NAME;
  }
};
</script>

<style scoped>
.btn:focus {
  outline: none;
  border-color: white;
}
</style>
