<template>
  <div>
    <div align="left">
      <br />
      <h5 class="font-weight-bold text-primary">Profile Internal User</h5>
      <br />
    </div>
    <b-card>
      <b-row align="left">
        <b-col>
          <b>NIM :</b>
          <p>{{items.nim}}</p>
        </b-col>
      </b-row>
      <br />
      <b-row align="left">
        <b-col>
          <b>Username :</b>
          <p>{{items.username}}</p>
        </b-col>
        <b-col>
          <b>Role :</b>
          <p v-if="items.role == 'px'">People Experience</p>
          <p v-else-if="items.role == 'cx'">Customer Experience</p>
          <p v-else-if="items.role == 'marketing'">Marketing</p>
          <p v-else-if="items.role == 'superadmin'">Super Admin</p>
        </b-col>
      </b-row>
      <br />
      <b-row align="left">
        <b-col>
          <b>Full Name :</b>
          <p>{{items.fullname}}</p>
        </b-col>
        <b-col>
          <b>Email :</b>
          <p>{{items.email}}</p>
        </b-col>
      </b-row>
      <b-row align="left">
        <b-col>
          <b>Phone Number :</b>
          <p>{{items.phone_number}}</p>
        </b-col>
        <b-col>
          <b>Address :</b>
          <p>{{items.address}}</p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  beforeCreate() {
    this.$store.dispatch(
      "internalUserModule/getInternalUser",
      this.$session.get("jwt").id
    );
  },
  created() {
    this.$store.watch(
      state => state.internalUserModule.internal_user_id,
      (newValue, oldValue) => {
        this.items = newValue;
      }
    );
  }
};
</script>

<style>
</style>
