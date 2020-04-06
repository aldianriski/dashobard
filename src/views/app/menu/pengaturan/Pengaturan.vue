<template>
  <div>
    <div align="left" class="mt-5">
      <h5 class="h5 mb-3 text-primary font-weight-bold">Pengaturan</h5>
      <br />
      <b-row>
        <b-col>
          <b-tabs
            active-nav-item-class="font-weight-bold text-primary"
            content-class="mt-3"
            justified
          >
            <b-tab title="Buku Alamat" active>
              <br />
              <b-row class="mt-3">
                <b-col class="ml-5 pl-5" md="8">
                  <b-card>
                    <b-row>
                      <b-col md="1">
                        <i class="text-primary fas fa-home"></i>
                      </b-col>
                      <b-col class="ml-3">
                        <b-row>
                          <b-col>Nama Alamat</b-col>
                        </b-row>
                        <b-row class="py-4">
                          <b-col>Detail Alamat</b-col>
                        </b-row>
                      </b-col>
                      <b-col md="2">
                        <router-link :to="{name: 'editAboutus'}" class="text-dark">
                          <img src="@/assets/ic-edit.svg" class="mr-4" alt />
                        </router-link>
                        <b-link class="text-dark">
                          <img class="mr-2" src="@/assets/rectangle.svg" alt />
                        </b-link>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
                <b-col class="ml-5" md="3">
                  <b-button variant="primary">Tambah Alamat Baru</b-button>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title disabled></b-tab>
            <b-tab title disabled></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 50,
        height: 50,
        class: "m1"
      },
      loading: true,
      errored: false,
      items: [],
      selectMode: "multi",
      selected: [],
      allSelected: false,
      indeterminate: false,
      fields: [
        {
          key: "selected",
          class: "text-center"
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          class: "text-left"
        },
        {
          key: "category",
          label: "Type",
          sortable: true,
          class: "text-left"
        },
        {
          key: "title.id",
          label: "Title",
          sortable: true,
          class: "text-center"
        },
        {
          key: "image",
          label: "Image",
          sortable: true,
          class: "text-center"
        },
        {
          key: "publish_date",
          label: "Publish Date",
          sortable: true,
          class: "text-center"
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          class: "text-center"
        },
        { key: "action", label: "Action", class: "text-center" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      customerShow: false,
      counthighlight: null,
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
    // this.$store.dispatch("getDonatur");
    this.$store
      .dispatch("ArticleModule/getArticles")
      .then(response => {
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
      });
    this.$store.dispatch("ArticleModule/getCountHighlight", null, {
      root: true
    });
  },
  created() {
    this.$store.watch(
      state => state.ArticleModule.articles,
      (newValue, oldValue) => {
        this.items = newValue;
      }
    );
    this.$store.watch(
      state => state.ArticleModule.counthighlight,
      (newValue, oldValue) => {
        this.counthighlight = newValue;
      }
    );
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    del(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("ArticleModule/delArticle", id);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    onRowSelected(items) {
      this.selected = items;
    },
    submitStatus(status) {
      let formData = new FormData();
      $.each(this.selected, function(key, value) {
        formData.append("articleid", value.id);
        formData.append("status", status);
      });
      $.each(formData.getAll("articleid"), function(key, value) {
        console.log(value);
      });

      this.loading = true;

      this.$store
        .dispatch("ArticleModule/updateStatusArticles", formData)
        .then(response => {
          this.loading = false;
          this.$store.dispatch("ArticleModule/getArticles", null, {
            root: true
          });
          this.$store.dispatch("ArticleModule/getCountHighlight", null, {
            root: true
          });
          this.$swal({
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000
          });
          console.log(response);
        })
        .catch(error => {
          this.loading = false;
          this.serverError = error.response;
          console.log(error);
        });
      // console.log(list);
    },
    toggleAll(checked) {
      this.selected = checked
        ? this.$refs.selectableTable.selectAllRows()
        : this.$refs.selectableTable.clearSelected();
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
