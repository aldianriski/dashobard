<template>
  <div>
    <b-row align="left">
      <b-col md="6" class="mt-2">
        <p class="mb-1 font-weight-bold">
          <font class="h4 text-primary">Pengiriman Aktif</font>
          &nbsp;&nbsp;&nbsp;
          <font class="h5 text-warning">{{formatDate(new Date())}}</font>
        </p>
      </b-col>
      <b-col>
        <b-row>
          <b-col md="4"></b-col>
          <b-col>
            <b-row align="right" class="text-right">
              <b-col></b-col>
              <b-col md="6" align="right" class="text-right">
                <b-input-group class="text-right">
                  <b-input-group-text class="bg-primary border-right-0 text-white" slot="prepend">
                    <i class="fas fa-download"></i>
                  </b-input-group-text>
                  <b-dropdown
                    text="Unduh sebagai"
                    variant="light"
                    toggle-class="bg-primary border-secondary text-white border-left-0 pl-0"
                    slot="append"
                  >
                    <b-dropdown-item>Action A</b-dropdown-item>
                    <b-dropdown-item>Action B</b-dropdown-item>
                  </b-dropdown>
                </b-input-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />
    <b-card body-class="py-0 px-0">
      <b-row>
        <b-col md="2" class="text-left pl-5 py-2">
          <b-row>
            <b-col>
              <h6 class="mt-3 mb-3">Status Pengiriman</h6>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="text-left pl-5 py-2">
          <b-button class="mt-2 mr-5 px-4" pill variant="primary">Semua</b-button>
          <b-button class="mt-2 mr-5 px-4" pill variant="secondary">Bisa diubah</b-button>
          <b-button class="mt-2 mr-5 px-4" pill variant="secondary">Bisa dibatalkan</b-button>
          <b-button class="mt-2 mr-5 px-4" pill variant="secondary">Selesai</b-button>
          <b-button class="mt-2 px-4" pill variant="secondary">Draft</b-button>
        </b-col>
        <!-- <b-col class="text-left pl-5 py-2 bg-primary rounded">
          <b-button class="mt-2 mr-5 px-4" pill variant="primary">Semua</b-button>
          <b-button class="mt-2 mr-5 px-4" pill variant="secondary">Bisa diubah</b-button>
          <b-button class="mt-2 mr-5 px-4" pill variant="secondary">Bisa dibatalkan</b-button>
          <b-button class="mt-2 mr-5 px-4" pill variant="secondary">Selesai</b-button>
          <b-button class="mt-2 px-4" pill variant="secondary">Draft</b-button>
        </!-->
        <b-col md="2">
          <h6 class="mt-4 text-primary">
            Saring Data&nbsp;
            <i class="fas fa-chevron-up"></i>
          </h6>
        </b-col>
      </b-row>
    </b-card>
    <br />
    <div class="text-left">
      <b-row>
        <b-col md="5" class="my-1">
          <b-row>
            <b-col md="6">
              <b-card>
                <b-form-checkbox
                  v-model="allSelected"
                  :indeterminate="indeterminate"
                  aria-describedby="items"
                  aria-controls="items"
                  @change="toggleAll"
                >&nbsp;Tandai Semua Kiriman</b-form-checkbox>
              </b-card>
            </b-col>
            <b-col>
              <label class="mt-3 pt-1 text-primary">Hapus Penandaan</label>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="2" class="my-1"></b-col>
        <b-col></b-col>
        <b-col md="4" class="my-1" align="right">
          <b-form-group class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Cari No AWB"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <br />
      </b-row>
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <!-- Main table element -->
      <b-table
        v-else
        show-empty
        hover
        ref="selectableTable"
        selectable
        :select-mode="selectMode"
        @row-selected="onRowSelected"
        responsive="sm"
        :busy="loading"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
        head-variant="light"
        class="bg-white"
      >
        <template v-slot:head(selected)="data" class="fas fa-check">
          <p class="fas fa-check">{{data.label}}</p>
        </template>
        <div slot="table-busy" class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
        <template v-slot:head(selected)="data">
          <span class="text-dark">
            <b-form-checkbox
              v-model="allSelected"
              :indeterminate="indeterminate"
              aria-describedby="items"
              aria-controls="items"
              @change="toggleAll"
              disabled
            ></b-form-checkbox>
          </span>
        </template>
        <template v-slot:cell(selected)="{ rowSelected, item }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
        <template v-slot:cell(category)="row">
          <p class="font-weight-bolder text-primary">{{row.value}}</p>
        </template>
        <template v-slot:cell(status)="row">
          <p class="text-success" v-if="row.value == 'publish'">Publish</p>
          <p class="text-primary" v-else-if="row.value == 'highlight'">Highlight</p>
          <p class="text-warning" v-else-if="row.value == 'archieved'">Archive</p>
        </template>
        <template v-slot:cell(publish_date)="{ value, item }">
          <div>
            {{item.publish_date_start === "" ? "Empty":item.publish_date_start.substring(0,10)}}&nbsp;
            <i
              class="fas fa-arrow-right"
            ></i>
            &nbsp;{{item.publish_date_end === "" ? "Empty":item.publish_date_end.substring(0,10)}}
          </div>
        </template>
        <template v-slot:cell(created_at)="row">{{row.value.substring(0,10)}}</template>
        <template v-slot:cell(image)="row">
          <b-img :src="row.value" width="70px" rounded alt="Image"></b-img>
        </template>
        <!-- <template v-slot:cell(action)="{ value, item }">
          <router-link :to="{name: 'editArticle', params: {id: item.id}}" class="text-dark">
            <img class="mr-2" src="@/assets/ic-edit.svg" alt />
          </router-link>
          <b-link class="text-dark" @click="del(item.id)">
            <img src="@/assets/rectangle.svg" alt />
          </b-link>
        </template>-->
      </b-table>

      <b-row class="mx-auto">
        <b-col md="4" class="mx-auto px-0">Total entries {{rows}}</b-col>
        <b-col md="4" class="mx-auto"></b-col>
        <b-col md="4" align="right" class="px-0">
          <b-pagination
            align="right"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      errored: false,
      items: [],
      fields: [
        {
          key: "selected",
          class: "text-center"
        },
        {
          key: "created_at",
          label: "KODE AWB",
          sortable: true,
          class: "text-left"
        },
        {
          key: "category",
          label: "PENGIRIM",
          sortable: true,
          class: "text-left"
        },
        {
          key: "title.id",
          label: "PENERIMA",
          sortable: true,
          class: "text-center"
        },
        {
          key: "image",
          label: "TUJUAN",
          sortable: true,
          class: "text-center"
        },
        {
          key: "status",
          label: "STATUS",
          sortable: true,
          class: "text-center"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      tanggal: new Date(),
      routename: null,
      customerShow: false,
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    },
    rows() {
      return this.items.length;
    }
  },
  beforeCreate() {
    // this.$store
    //   .dispatch("ArticleModule/getArticles")
    //   .then(response => {
    //     this.loading = false;
    //   })
    //   .catch(error => {
    //     this.loading = false;
    //   });
    // this.$store.dispatch("ArticleModule/getCountHighlight", null, {
    //   root: true
    // });
  },
  created() {
    // Set the initial number of items
    this.totalRows = this.items.length;
    // this.$store.watch(
    //   state => state.ArticleModule.articles,
    //   (newValue, oldValue) => {
    //     this.items = newValue;
    //   }
    // );
    // this.$store.watch(
    //   state => state.ArticleModule.counthighlight,
    //   (newValue, oldValue) => {
    //     this.counthighlight = newValue;
    //   }
    // );
  },
  methods: {
    date() {
      var currentDateWithFormat = "";
      this.tanggal = currentDateWithFormat;
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    toggleAll(checked) {
      this.selected = checked
        ? this.$refs.selectableTable.selectAllRows()
        : this.$refs.selectableTable.clearSelected();
    },
    onRowSelected(items) {
      this.selected = items;
    },
    formatDate(date) {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + " " + monthNames[monthIndex] + " " + year;
    }
  },
  watch: {
    selected(newVal, oldVal) {
      if (newVal.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newVal.length === this.items.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
    }
  }
};
</script>

<style>
</style>
