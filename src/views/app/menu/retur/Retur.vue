<template>
  <div>
    <div>
      <form-wizard
        @on-complete="onComplete"
        shape="circle"
        title="Pengiriman Retur"
        subtitle="Buat pengiriman Retur"
        color="#5E50A1"
        error-color="#ff4949"
      >
        <tab-content
          title="Informasi Pengirim"
          icon="fas fa-circle"
          :before-change="validateFirstStep"
        >
          <form data-vv-scope="form-1">
            <b-row>
              <b-col md="7">
                <b-card class="text-left">
                  <h5 class="font-weight-bold">Pengirim</h5>
                  <br />
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Nama Pengirim"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="Masukan Nama Pengirim"
                          v-model="nama"
                          data-vv-as="Nama Pengirim"
                          v-validate="'required|min:5|max:30'"
                          name="nama"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-nama-feedback"
                        >{{ veeErrors.first('form-1.nama') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Email Pengirim"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="Opsional"
                          v-model="email"
                          data-vv-as="Email Pengirim"
                          v-validate="'required|min:5|max:30'"
                          name="email"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-email-feedback"
                        >{{ veeErrors.first('form-1.email') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Kontak Pengirim"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="No HP Pengirim"
                          v-model="kontak"
                          data-vv-as="Kontak Pengirim"
                          v-validate="'required|min:5|max:30'"
                          name="kontak"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-kontak-feedback"
                        >{{ veeErrors.first('form-1.kontak') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <h5 class="font-weight-bold">Alamat Penjemputan</h5>
                  <br />
                  <b-row>
                    <b-col class="px-5">
                      <b-form-group>
                        <b-form-radio-group
                          v-model="selected"
                          name="radios-stacked"
                          style="display: block;"
                          stacked
                        >
                          <b-form-radio
                            value="first"
                            class="mb-4"
                            :class="selected != 'first' ? 'text-gray-400':''"
                            style="display: block;"
                          >
                            <label
                              class="ml-3 font-weight-bold"
                              style="display: block;"
                            >TITLE ALAMAT</label>
                            <p class="ml-3">JL. titik titik</p>
                            <b-form-group
                              v-show="selected == 'first'"
                              id="fieldset-1"
                              label="Catatan Untuk Hero"
                              label-class="text-gray-800"
                              label-for="input-1"
                              class="ml-3"
                            >
                              <input
                                placeholder="Contoh: Depan kantor kelurahan"
                                v-model="note"
                                v-validate="'max:50'"
                                name="note"
                                style="display: block;"
                                class="form-control"
                              />
                              <b-form-invalid-feedback
                                id="input-note-feedback"
                              >{{ veeErrors.first('form-1.note') }}</b-form-invalid-feedback>
                            </b-form-group>
                          </b-form-radio>
                          <b-form-radio
                            value="second"
                            :class="selected != 'second' ? 'text-gray-400':''"
                          >
                            <label class="ml-3 font-weight-bold">TITLE ALAMAT</label>
                            <p class="ml-3">JL. titik titik</p>
                            <b-form-group
                              v-show="selected == 'second'"
                              id="fieldset-1"
                              label="Catatan Untuk Hero"
                              label-class="text-gray-800"
                              label-for="input-1"
                              class="ml-3"
                            >
                              <input
                                placeholder="Contoh: Depan kantor kelurahan"
                                v-model="note"
                                v-validate="'max:50'"
                                name="note"
                                class="form-control"
                              />
                              <b-form-invalid-feedback
                                id="input-note-feedback"
                              >{{ veeErrors.first('form-1.note') }}</b-form-invalid-feedback>
                            </b-form-group>
                          </b-form-radio>
                        </b-form-radio-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="ml-2">
                    <b-col md="1"></b-col>
                    <b-col>
                      <b-link @click="modalTambahAlamat = !modalTambahAlamat" class="text-primary">
                        <i class="fas fa-plus"></i>&nbsp;Tambah Alamat Baru
                      </b-link>
                    </b-col>
                    <b-col class="text-right">
                      <b-link
                        @click="modalBukuAlamat = !modalBukuAlamat"
                        class="text-primary"
                      >Lihat Buku Alamat</b-link>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col md="5">
                <b-card>
                  <b-row>
                    <b-col>
                      <h5 class="font-weight-bold text-left">Detail Barang</h5>
                    </b-col>
                    <b-col class="text-right">
                      <i class="fas fa-info-circle text-gray-400 fa-lg"></i>
                    </b-col>
                  </b-row>
                  <hr />
                  <b-row>
                    <b-col class="text-left" md="5">
                      <label>Ukuran Paket</label>
                    </b-col>
                    <b-col md="1"></b-col>
                    <b-col>
                      <b-form-checkbox
                        id="paket"
                        v-model="ukuran_paket_all"
                        name="paket"
                        class="text-left"
                        :value="true"
                        :unchecked-value="false"
                        @change="paket = null"
                      >Berlaku untuk semua</b-form-checkbox>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-input-group>
                        <b-input-group-prepend>
                          <div class="form-control img-calender-select border-right-0">
                            <i class="fas fa-box"></i>
                          </div>
                        </b-input-group-prepend>

                        <b-form-select
                          v-validate="ukuran_paket_all ? '':'required'"
                          name="ukuran_paket"
                          data-vv-as="Ukuran Paket"
                          v-model="ukuran_paket"
                          class="m-0 p-0 border-left-0"
                          :disabled="ukuran_paket_all == true"
                        >
                          <option :value="null" disabled>Pilih ukuran paket</option>
                          <option value="a">Small</option>
                          <option value="b">Medium</option>
                          <option value="c">Large</option>
                        </b-form-select>
                        <p
                          class="text-danger text-left"
                          style="width:100%;margin-top:.25rem;font-size: 80%;"
                        >{{ veeErrors.first('form-1.ukuran_paket') }}</p>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <br />
                  <b-row>
                    <b-col class="text-left" md="5">
                      <label>Jenis Barang</label>
                    </b-col>
                    <b-col md="1"></b-col>
                    <b-col>
                      <b-form-checkbox
                        id="jenis_barang"
                        v-model="jenis_barang_all"
                        name="jenis_barang"
                        class="text-left"
                        :value="true"
                        :unchecked-value="false"
                        @change="jenis_barang = null"
                      >Berlaku untuk semua</b-form-checkbox>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-input-group>
                        <b-input-group-prepend>
                          <div class="form-control img-calender-select border-right-0">
                            <i class="fas fa-box"></i>
                          </div>
                        </b-input-group-prepend>

                        <b-form-select
                          v-model="jenis_barang"
                          v-validate="jenis_barang_all ? '':'required'"
                          name="jenis_barang"
                          data-vv-as="Jenis Barang"
                          class="m-0 p-0 border-left-0"
                          :disabled="jenis_barang_all == true"
                        >
                          <option :value="null" disabled>Pilih jenis barang</option>
                          <option value="a">Frozen Food</option>
                          <option value="a">Fashion & Apparel</option>
                          <option value="a">Health & Beauty</option>
                        </b-form-select>
                        <p
                          class="text-danger text-left"
                          style="width:100%;margin-top:.25rem;font-size: 80%;"
                        >{{ veeErrors.first('form-1.jenis_barang') }}</p>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <br />
                  <b-form-checkbox
                    id="pecah_belah"
                    v-model="pecah_belah"
                    name="pecah_belah"
                    class="text-left"
                    :value="true"
                    :unchecked-value="false"
                  >Barang pecah belah</b-form-checkbox>
                  <hr />
                  <b-row>
                    <b-col class="text-left" md="5">
                      <label>Asuransi</label>
                    </b-col>
                    <b-col md="1"></b-col>
                    <b-col>
                      <b-form-checkbox
                        id="asuransi"
                        v-model="asuransi"
                        name="asuransi"
                        class="text-left"
                        :value="true"
                        :unchecked-value="false"
                      >Berlaku untuk semua</b-form-checkbox>
                    </b-col>
                  </b-row>
                  <p class="text-left">Perlindungan asuransi hingga Rp.10.000.000</p>
                </b-card>
              </b-col>
            </b-row>
          </form>
        </tab-content>
        <tab-content
          title="Informasi Penerima"
          :before-change="validateSecondStep"
          icon="fas fa-circle"
        >
          <form data-vv-scope="form-2">
            <b-row>
              <b-col md="7">
                <b-card class="text-left">
                  <h5 class="font-weight-bold">Penerima</h5>
                  <br />
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Nama Penerima"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="Masukan Nama Penerima"
                          v-model="nama_penerima"
                          v-validate="'required|min:5|max:30'"
                          name="nama_penerima"
                          data-vv-as="Nama Penerima"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-nama_penerima-feedback"
                        >{{ veeErrors.first('form-2.nama_penerima') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Email Penerima"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="Opsional"
                          v-model="email_penerima"
                          data-vv-as="Email Penerima"
                          v-validate="'required|min:5|max:30'"
                          name="email_penerima"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-email_penerima-feedback"
                        >{{ veeErrors.first('form-2.email_penerima') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Kontak Penerima"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="No HP penerima"
                          v-model="kontak_penerima"
                          data-vv-as="Kontak Penerima"
                          v-validate="'required|min:5|max:30'"
                          name="kontak_penerima"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-kontak_penerima-feedback"
                        >{{ veeErrors.first('form-2.kontak_penerima') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <h5 class="font-weight-bold">Pilih Alamat Tujuan</h5>
                  <br />
                  <b-row>
                    <b-col>
                      <input
                        placeholder="Masukan Alamat Tujuan"
                        v-model="alamat_tujuan"
                        data-vv-as="Alamat Tujuan"
                        v-validate="'required|min:5|max:30'"
                        name="alamat_tujuan"
                        class="form-control"
                      />
                      <b-form-invalid-feedback
                        id="input-alamat_tujuan-feedback"
                      >{{ veeErrors.first('form-2.alamat_tujuan') }}</b-form-invalid-feedback>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3">
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Catatan Untuk Hero(opsional)"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="Opsional"
                          v-model="note_2"
                          data-vv-as="Note"
                          v-validate="'required|min:5|max:30'"
                          name="note_2"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-note_2-feedback"
                        >{{ veeErrors.first('form-2.note_2') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Kode Pos"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <input
                          placeholder="Contoh: 16153"
                          v-model="kode_pos"
                          data-vv-as="Kode Pos"
                          v-validate="'required|min:5|max:30'"
                          name="kode_pos"
                          class="form-control"
                        />
                        <b-form-invalid-feedback
                          id="input-kode_pos-feedback"
                        >{{ veeErrors.first('form-2.kode_pos') }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3">
                    <b-col>
                      <b-input-group>
                        <b-input-group-prepend>
                          <div class="form-control img-calender-select border-right-0">
                            <i class="fas fa-box"></i>
                          </div>
                        </b-input-group-prepend>
                        <b-form-select
                          v-model="waktu_jemput"
                          data-vv-as="Waktu Jemput"
                          v-validate="'required'"
                          name="waktu_jemput"
                          class="m-0 p-0 border-left-0"
                        >
                          <option :value="null">Pilih Waktu Penjemputan</option>
                          <option>08:00-10:00</option>
                          <option>10:00-12:00</option>
                          <option>12:00-14:00</option>
                          <option>14:00-16:00</option>
                          <option>16:00-18:00</option>
                          <option>18:00-20:00</option>
                          <option>20:00-22:00</option>
                        </b-form-select>
                        <p
                          class="text-danger"
                          style="width:100%;margin-top:.25rem;font-size: 80%;"
                        >{{ veeErrors.first('form-2.waktu_jemput') }}</p>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <hr
                    v-show="jenis_barang_all == false || ukuran_paket_all == false || asuransi == false"
                  />
                  <h5
                    v-show="jenis_barang_all == false || ukuran_paket_all == false || asuransi == false"
                    class="font-weight-bold"
                  >Detail Barang</h5>
                  <br />
                  <b-row v-show="ukuran_paket_all == false">
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Ukuran Paket"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <b-input-group>
                          <b-input-group-prepend>
                            <div class="form-control img-calender-select border-right-0">
                              <i class="fas fa-box"></i>
                            </div>
                          </b-input-group-prepend>

                          <b-form-select
                            v-model="ukuran_paket2"
                            v-validate="ukuran_paket_all == false ? 'required':''"
                            name="ukuran_paket2"
                            data-vv-as="Ukuran Paket"
                            class="m-0 p-0 border-left-0"
                          >
                            <option :value="null">Ukuran Paket</option>
                            <option value="a">Small</option>
                            <option value="b">Medium</option>
                            <option value="c">Large</option>
                          </b-form-select>
                          <p
                            class="text-danger text-left"
                            style="width:100%;margin-top:.25rem;font-size: 80%;"
                          >{{ veeErrors.first('form-2.ukuran_paket2') }}</p>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3" v-show="jenis_barang_all == false">
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Jenis Barang"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >
                        <b-input-group>
                          <b-input-group-prepend>
                            <div class="form-control img-calender-select border-right-0">
                              <i class="fas fa-box"></i>
                            </div>
                          </b-input-group-prepend>

                          <b-form-select
                            v-model="jenis_barang2"
                            v-validate="jenis_barang_all == false ? 'required':''"
                            name="jenis_barang2"
                            data-vv-as="Jenis Barang"
                            class="m-0 p-0 border-left-0"
                          >
                            <option :value="null">Jenis Barang</option>
                            <option value="a">Frozen Food</option>
                            <option value="a">Fashion & Apparel</option>
                            <option value="a">Health & Beauty</option>
                          </b-form-select>
                          <p
                            class="text-danger text-left"
                            style="width:100%;margin-top:.25rem;font-size: 80%;"
                          >{{ veeErrors.first('form-2.jenis_barang2') }}</p>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col md="4" class="pt-4 mt-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="pecah_belah2"
                        name="checkbox-1"
                        class="text-left"
                        :value="true"
                        :unchecked-value="false"
                      >Barang Pecah Belah</b-form-checkbox>
                    </b-col>
                  </b-row>
                  <b-row v-show="asuransi == false" class="mt-3">
                    <b-col>
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="asuransi2"
                        name="checkbox-1"
                        class="text-left"
                        :value="true"
                        :unchecked-value="false"
                      >Asuransi</b-form-checkbox>
                      <b-form-group
                        id="fieldset-1"
                        label-class="text-gray-800"
                        label-for="input-1"
                      >Perlindungan asuransi hingga Rp. 10.000.000</b-form-group>
                    </b-col>
                  </b-row>
                  <b-row v-show="asuransi == false">
                    <b-col>
                      <b-link class="text-primary font-weight-bold">Perlindungan Asuransi</b-link>
                    </b-col>
                    <b-col md="4" class="text-right">
                      <b-link class="text-primary">Rp 1.000.000</b-link>
                    </b-col>
                  </b-row>
                  <br />
                  <b-row>
                    <b-col></b-col>
                    <b-col md="4">
                      <b-button block variant="primary" @click="addArray" size="lg">Tambah</b-button>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col md="5">
                <b-card style="height:700px;min-height:500px;overflow-y: scroll;">
                  <b-row>
                    <b-col class="text-left">
                      <h5 class="font-weight-bold">Daftar Penerima {{shipment.length}}</h5>
                    </b-col>
                    <b-col class="text-right">
                      <h6 class="font-weight-light">maksimal 100 penerima</h6>
                    </b-col>
                  </b-row>
                  <br />
                  <b-row class="mb-4" v-for="(data , k) in shipment.slice()" :key="k">
                    <b-col>
                      <b-card border-variant="primary" class="text-left">
                        <b-row>
                          <b-col>
                            <h5 class="text-primary">Penerima {{k+1}}</h5>
                          </b-col>
                          <b-col class="text-right">
                            <b-link
                              v-show="data.nama_penerima != ''"
                              class="text-primary"
                            >Edit&nbsp;</b-link>
                            <label v-show="data.nama_penerima != '' && shipment.length > 1">|</label>
                            <b-link
                              v-show="data.nama_penerima != '' && shipment.length > 1"
                              class="text-danger"
                              @click="remove(k)"
                            >&nbsp;Delete</b-link>
                          </b-col>
                        </b-row>
                        <p v-if="data.nama_penerima == ''">sedang input data</p>
                        <p v-else>{{data.nama_penerima}}</p>
                        <b-row v-if="data.nama_penerima == ''">
                          <b-col>
                            <i class="far fa-calendar-alt"></i>&nbsp;sedang input data
                          </b-col>
                          <b-col class="text-right"></b-col>
                        </b-row>
                        <b-row v-else>
                          <b-col>
                            <i class="far fa-calendar-alt"></i>
                            &nbsp;Hari ini {{data.waktu_jemput}}
                          </b-col>
                          <b-col class="text-right">
                            <label class="text-success">
                              <i class="fas fa-check"></i>&nbsp;Valid
                            </label>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                    <b-col>
                      <b-card border-variant="primary" class="text-left">
                        <b-row>
                          <b-col>
                            <h5 class="text-primary">Penerima 2</h5>
                          </b-col>
                          <b-col class="text-right">
                            <b-link class="text-primary">Edit</b-link>&nbsp;|
                            <b-link class="text-danger">Delete</b-link>
                          </b-col>
                        </b-row>
                        <p>sedang input data</p>
                      </b-card>
                    </b-col>
                  </b-row>
                  <br />
                  <b-row>
                    <b-col>
                      <b-card border-variant="danger" class="text-left">
                        <b-row>
                          <b-col>
                            <h5 class="text-primary">Penerima 2</h5>
                          </b-col>
                          <b-col class="text-right">
                            <b-link class="text-primary">Edit</b-link>&nbsp;|
                            <b-link class="text-danger">Delete</b-link>
                          </b-col>
                        </b-row>
                        <p>ALAMAT PENGIRIMAN</p>
                        <b-row>
                          <b-input-group>
                            <b-input-group-prepend>
                              <div class="form-control img-calender-select border-right-0">
                                <i class="fas fa-box"></i>
                              </div>
                            </b-input-group-prepend>

                            <b-form-select v-model="jenis_barang" class="m-0 p-0 border-left-0">
                              <option :value="null">Pilih Jadwal Kembali</option>
                              <option value="a">Option A</option>
                              <option value="b" disabled>Option B (disabled)</option>
                              <optgroup label="Grouped Options">
                                <option :value="{ C: '3PO' }">Option with object value</option>
                                <option :value="{ R: '2D2' }">Another option with object value</option>
                              </optgroup>
                            </b-form-select>
                          </b-input-group>
                        </b-row>
                        <br />
                        <label class="text-danger">
                          <i class="fas fa-info"></i>&nbsp;Erorr Alert!
                        </label>
                      </b-card>
                    </b-col>
                  </b-row>-->
                </b-card>
              </b-col>
            </b-row>
          </form>
        </tab-content>
        <tab-content title="Ringkasan Pembayaran" icon="fas fa-circle">
          <b-row>
            <b-col md="7">
              <b-card class="text-left">
                <b-row>
                  <b-col>
                    <h5 class="font-weight-bold">Pengirim</h5>
                  </b-col>
                  <b-col class="text-right">
                    <b-link class="text-primary">Ubah</b-link>
                  </b-col>
                </b-row>
                <p>Nama / No telepon</p>
                <p class="font-weight-bold">Alamat</p>
                <hr />
                <h5 class="font-weight-bold">Detail Barang</h5>
                <br />
                <b-row>
                  <b-col>
                    <i class="fas fa-box"></i>&nbsp;Dimensi Barang
                  </b-col>
                  <b-col class="text-right">
                    <i class="fas fa-check"></i>&nbsp;Barang Pecah Belah
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <i class="fas fa-box"></i>&nbsp;Jenis Barang
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <b-link class="font-weight-bold text-primary">Perlindungan Asuransi</b-link>
                  </b-col>
                  <b-col class="text-right">
                    <b-link class="font-weight-bold text-primary">Rp. 80.000</b-link>
                  </b-col>
                </b-row>
                <hr />
                <b-row>
                  <b-col>
                    <h5 class="font-weight-bold">Penerima(16)</h5>
                  </b-col>
                  <b-col class="text-right">
                    <b-link class="text-primary">Lihat Daftar</b-link>&nbsp;|
                    <b-link class="text-primary">Ubah</b-link>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col md="5" class="text-left">
              <b-card style="min-height:400px;">
                <h5 class="font-weight-bold">Rincian Biaya</h5>
                <br />
                <b-row>
                  <b-col>Biaya Kirim</b-col>
                  <b-col class="text-right">Rp. 10.000</b-col>
                </b-row>
                <b-row>
                  <b-col>Asuransi</b-col>
                  <b-col class="text-right">Rp. 10.000</b-col>
                </b-row>
                <b-row>
                  <b-col>Kemasan Tambahan</b-col>
                  <b-col class="text-right">Rp. 1000</b-col>
                </b-row>
                <hr />
                <h5 class="font-weight-bold">Payment Used</h5>
                <b-row>
                  <b-col md="1">
                    <i class="fas fa-check"></i>
                  </b-col>
                  <b-col>
                    Use Paxel Credit
                    <p class="text-gray-400">Balance Rp. 2.000.000</p>
                  </b-col>
                  <b-col class="text-right">
                    <label class="text-success">- Rp. 400.000</label>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="1">
                    <i class="fas fa-check"></i>
                  </b-col>
                  <b-col>
                    Cash On Pickup (COP)
                    <p class="text-gray-400">Bayar Saat Penjemputan</p>
                  </b-col>
                  <b-col class="text-right">
                    <label>Rp. 400.000</label>
                  </b-col>
                </b-row>
                <hr />
                <b-row>
                  <b-col>
                    <h5 class="font-weight-bold">Total Biaya</h5>
                  </b-col>
                  <b-col>
                    <h5 class="font-weight-bold text-right">Rp. 1.000.000</h5>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </tab-content>

        <b-button variant="primary" slot="prev">Kembali</b-button>
        <b-button variant="primary" slot="next">Simpan & Lanjutkan</b-button>
        <b-button variant="primary" slot="finish">Selesai</b-button>
      </form-wizard>
    </div>
    <b-modal
      v-model="modalTambahAlamat"
      header-class="bg-gray-100"
      body-class="bg-gray-100"
      hide-footer
      size="lg"
      hide-header
    >
      <b-row>
        <b-col>
          <h5 class="font-weight-bold text-dark">Tambah Alamat Baru</h5>
        </b-col>
        <b-col>
          <b-link class="float-right" @click="modalTambahAlamat=false" style="text-decoration:none">
            <i class="text-dark fas fa-times"></i>
          </b-link>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="8">
          <b-form-group
            id="fieldset-1"
            label="Nama Alamat"
            label-class="text-gray-800"
            label-for="input-1"
            class="ml-3"
          >
            <input
              placeholder="Contoh: Rumah, Kantor, dsbg"
              v-model="title_id"
              v-validate="'required|min:5|max:30'"
              name="title_id"
              style="display: block;"
              class="form-control"
            />
            <b-form-invalid-feedback id="input-title_id-feedback">{{ veeErrors.first('title_id') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="fieldset-1"
            label="Kode Pos"
            label-class="text-gray-800"
            label-for="input-1"
            class="ml-3"
          >
            <input
              placeholder="Masukan Kodepos"
              v-model="title_id"
              v-validate="'required|min:5|max:30'"
              name="title_id"
              style="display: block;"
              class="form-control"
            />
            <b-form-invalid-feedback id="input-title_id-feedback">{{ veeErrors.first('title_id') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="ml-3">
            <input
              placeholder="Masukan Alamat Penjemputan"
              v-model="title_id"
              v-validate="'required|min:5|max:30'"
              name="title_id"
              style="display: block;"
              class="form-control"
            />
          </b-card>
        </b-col>
      </b-row>
      <hr />
      <b-button variant="primary" block>Simpan</b-button>
    </b-modal>
    <b-modal
      v-model="modalBukuAlamat"
      header-class="bg-gray-100"
      body-class="bg-gray-100"
      hide-footer
      hide-header
    >
      <b-row>
        <b-col>
          <h5 class="font-weight-bold text-dark">Buku Alamat</h5>
        </b-col>
        <b-col>
          <b-link class="float-right" @click="modalBukuAlamat=false" style="text-decoration:none">
            <i class="text-dark fas fa-times"></i>
          </b-link>
        </b-col>
      </b-row>
      <hr />

      <b-form-group>
        <b-form-radio-group
          v-model="selected"
          name="radios-stacked"
          style="display: block;"
          stacked
        >
          <b-form-radio
            value="first"
            class="mb-4"
            :class="selected != 'first' ? 'text-gray-400':''"
            style="display: block;"
          >
            <label class="ml-3 font-weight-bold" style="display: block;">TITLE ALAMAT</label>
            <p class="ml-3">JL. titik titik</p>
          </b-form-radio>
          <b-form-radio value="second" :class="selected != 'second' ? 'text-gray-400':''">
            <label class="ml-3 font-weight-bold">TITLE ALAMAT</label>
            <p class="ml-3">JL. titik titik</p>
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalTambahAlamat: false,
      modalBukuAlamat: false,
      ukuran_paket_all: false,
      jenis_barang_all: false,
      pecah_belah: false,
      asuransi: false,
      formInline: {
        user: "",
        region: ""
      },
      rules: {
        user: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change"
          }
        ]
      },
      kontak_penerima: "",
      shipment: [
        {
          nama_penerima: "",
          email_penerima: "",
          kontak_penerima: "",
          alamat_tujuan: "",
          note_tujuan: "",
          kode_pos: "",
          waktu_jemput: ""
        }
      ],
      ukuran_paket: null,
      ukuran_paket2: null,
      jenis_barang2: null,
      jenis_barang: null,
      waktu_jemput: null,
      selected: "first",
      nama_penerima: "",
      email_penerima: "",
      kontak_penerima: "",
      alamat_tujuan: "",
      note_tujuan: "",
      kode_pos: "",
      note_2: "",
      options: [
        { text: "First radio", value: "first", class: "text-danger" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" }
      ]
    };
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
    validateFirstStep() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("form-1").then(valid => {
          resolve(valid);
          this.$validator.reset();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    },
    validateSecondStep() {
      return new Promise((resolve, reject) => {
        if (this.shipment.length > 1) {
          resolve(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
          this.$validator.reset();
        } else {
          resolve(false);
          this.$swal(
            "ERROR!",
            "Your file cant be submit, add a shipment.",
            "warning"
          );
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    },
    remove(index) {
      this.shipment.splice(index, 1);
    },
    addArray() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("form-2").then(result => {
          if (result) {
            this.shipment.unshift({
              nama_penerima: this.nama_penerima,
              email_penerima: this.email_penerima,
              kontak_penerima: this.kontak_penerima,
              alamat_tujuan: this.alamat_tujuan,
              note_tujuan: this.note_tujuan,
              kode_pos: this.kode_pos,
              waktu_jemput: this.waktu_jemput
            });
            this.nama_penerima = "";
            this.email_penerima = "";
            this.kontak_penerima = "";
            this.alamat_tujuan = "";
            this.note_tujuan = "";
            this.kode_pos = "";
            this.note_2 = "";
            this.waktu_jemput = null;
            this.ukuran_paket2 = null;
            this.jenis_barang2 = null;
            this.$validator.reset();
          } else {
            this.$swal("ERROR!", "Your file cant be submit.", "warning");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }
  }
};
</script>

<style>
.custom-control-label {
  display: block;
}
</style>