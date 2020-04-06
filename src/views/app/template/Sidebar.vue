<template>
  <ul class="navbar-nav bg-gradient-light sidebar sidebar-light accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <img class="sidebar-brand-icon" src="@/assets/logo-px.png" width="32px" height="145%" />

      <div class="sidebar-brand-text text-primary mx-3 mt-1">
        <font face="Netto" size="6">paxel</font>
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <div class="nav-link">
        <b-button
          variant="primary"
          @click="modalShow = !modalShow"
          class="font-weight-light px-0"
          block
        >
          <img src="@/assets/ic-check-rate-white.svg" width="39" height="39" class="px-2" alt />
          <span>Buat Pengiriman</span>
        </b-button>
      </div>
    </li>
    <li
      class="nav-item"
      @mouseover="dashboard = true"
      @mouseleave="dashboard = false"
      :class="{'active border-right-active': routename === 'dashboard'}"
    >
      <router-link :to="{name: 'dashboard'}" class="nav-link">
        <img
          src="@/assets/ic-dashboard.svg"
          alt
          class="px-2"
          v-if="dashboard || routename ==='dashboard'"
        />
        <img
          src="@/assets/ic-dashboard-unselect.svg"
          alt
          class="px-2"
          v-else-if="routename != 'dashboard' && !dashboard"
        />
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <!-- <hr class="sidebar-divider d-none d-md-block" /> -->
    <li
      @mouseover="shipment = true"
      @mouseleave="shipment = false"
      class="nav-item"
      :class="{ 'active border-right-active': routename === 'Riwayat' }"
    >
      <router-link :to="{name: 'Riwayat'}" class="nav-link">
        <img
          src="@/assets/ic-shipment-history.svg"
          alt
          class="px-2"
          v-if="shipment || routename ==='Riwayat'"
        />
        <img
          src="@/assets/ic-shipment-history-unselect.svg"
          alt
          class="px-2"
          v-else-if="routename != 'Riwayat' && !shipment"
        />
        <span>Riwayat Pengiriman</span>
      </router-link>
    </li>
    <li
      @mouseover="setting = true"
      @mouseleave="setting = false"
      class="nav-item"
      :class="{ 'active border-right-active': routename === 'Pengaturan' }"
    >
      <router-link :to="{name: 'Pengaturan'}" class="nav-link">
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="setting || routename ==='Pengaturan'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'Pengaturan' && !setting"
        />
        <span>Pengaturan</span>
      </router-link>
    </li>
    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <!-- <button class="rounded-circle border-0" id="sidebarToggle"></button> -->
    </div>
    <b-modal
      v-model="modalShow"
      centered
      header-class="bg-gray-100"
      body-class="bg-gray-100"
      hide-footer
      hide-header
      title-class="font-weight-bold"
      title="Buat Pengiriman Baru"
    >
      <b-row>
        <b-col>
          <h5 class="font-weight-bold text-dark">Buat Pengiriman Baru</h5>
        </b-col>
        <b-col>
          <b-link class="float-right" @click="modalShow=false" style="text-decoration:none">
            <i class="text-dark fas fa-times"></i>
          </b-link>
        </b-col>
      </b-row>
      <br />
      <b-card>
        <router-link :to="{name: 'Multiple'}" style="text-decoration:none;">
          <b-row @click="modalShow=false">
            <b-col md="3">
              <img src="@/assets/multiple4x.png" width="100" height="100" alt />
            </b-col>
            <b-col class="ml-3">
              <b-row>
                <h5 class="text-primary font-weight-bold">Pengiriman Multiple</h5>
              </b-row>
              <b-row>
                <label>Buat pengiriman ke lebih dari satu penerima sekaligus dengan mudah</label>
              </b-row>
            </b-col>
          </b-row>
        </router-link>
      </b-card>
      <br />
      <b-card>
        <router-link :to="{name: 'Retur'}" style="text-decoration:none;">
          <b-row @click="modalShow=false">
            <b-col md="3">
              <img src="@/assets/retur4x.png" width="100" height="100" alt />
            </b-col>
            <b-col class="ml-3">
              <b-row>
                <h5 class="text-primary font-weight-bold">Pengiriman Retur</h5>
              </b-row>
              <b-row>
                <label>Buat pengiriman pengembalian lebih dari satu pengirim sekaligus dengan mudah</label>
              </b-row>
            </b-col>
          </b-row>
        </router-link>
      </b-card>
    </b-modal>
    {{changeRoute()}}
  </ul>
</template>

<script>
export default {
  data() {
    return {
      routename: null,
      modalShow: false,
      dashboard: false,
      shipment: false,
      setting: false,
      session: this.$session.get("jwt")
    };
  },
  methods: {
    changeRoute() {
      this.routename = this.$route.name;
    }
  },
  mounted() {},
  created() {}
};
</script>

<style>
@font-face {
  font-family: "Netto";
  src: url("../../../assets/netto.ttf");
}
@font-face {
  font-family: "Gotham";
  src: url("../../../assets/Gotham.ttf");
}
</style>
