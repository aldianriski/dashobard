<template>
  <div>
    <!-- Content Row -->
    <div class="row text-center mt-5 pt-5">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col"></div>
      <div class="col-xl-10 col-md-10 text-center mb-4">
        <div class="card shadow h-100 py-2">
          <div class="card-body" id="v-step-1">
            <div class="row no-gutters">
              <div class="col mr-2 text-left px-5 py-3">
                <div class="h4 font-weight-bold mb-1 text-primary">Selamat datang kembali, Username!</div>
                <div class="mt-3 mb-0 font-weight-bold text-gray-500">Siap mengirim beberapa paket?</div>
                <br />
                <br />
                <b-row>
                  <b-col md="4">
                    <b-button
                      class="p-2"
                      @click="modalShow = !modalShow"
                      block
                      variant="primary"
                    >Buat Pengiriman</b-button>
                  </b-col>
                  <b-col md="5">
                    <router-link :to="{name: 'Riwayat'}" style="text-decoration:none;">
                      <b-button class="p-2" block variant="outline-dark">Riwayat Pengiriman</b-button>
                    </router-link>
                  </b-col>
                </b-row>
              </div>
              <div class="col-md-4 mt-n5">
                <img src="@/assets/Banner.svg" width="300" height="300" class="mt-n5" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
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
          <b-row>
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
          <b-row>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      datacollection: null,
      hover: false,
      id: this.$session.get("jwt"),
      modalShow: false
    };
  },
  mounted: function() {},
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter", "value"])
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }
  }
};
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.ganti {
  background: white;
  color: blue;
}
</style>