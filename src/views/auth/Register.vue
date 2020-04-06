<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block">
            <img
              src="https://cms.dailysocial.id/wp-content/uploads/2018/09/100d491f07ea7c79cc95bab336942024_bg-about-who-are-we.png"
              style="width: 100%;height:100%;display:block; position:absolute; object-fit: cover;"
              alt
            />
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      v-model="user.firstName"
                      v-validate="'required'"
                      placeholder="First Name"
                      name="firstName"
                      class="form-control"
                      id="input-live"
                      aria-describedby="input-live-help input-live-feedback"
                    />
                    <b-form-invalid-feedback
                      id="input-live-feedback"
                    >{{ veeErrors.first('firstName') }}</b-form-invalid-feedback>

                    <span></span>
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      v-model="user.lastName"
                      v-validate="'required'"
                      placeholder="Last Name"
                      name="lastName"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="user.email"
                    v-validate="'required|email'"
                    placeholder="Email"
                    name="email"
                    class="form-control"
                  />
                  <!-- <span>{{ errors.first('email') }}</span> -->
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="user.username"
                    v-validate="'required|min:6|max:30'"
                    placeholder="Username"
                    name="username"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    v-model="user.password"
                    v-validate="'required|min:6|max:30'"
                    placeholder="Password"
                    name="password"
                    class="form-control"
                  />
                </div>
                <button :disabled="veeErrors.any() || !isCompleted" class="btn btn-primary">Register</button>
                <!-- <img
                  v-show="status.registering"
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                >-->
                <router-link to="/login" class="btn btn-outline-secondary ml-3">Cancel</router-link>
              </form>
              <hr />
              <div class="text-center">
                <router-link :to="{name: 'forgotpass'}" class="small text-primary">Forgot Password?</router-link>
              </div>
              <div class="text-center">
                <router-link
                  :to="{name: 'login'}"
                  class="small text-primary"
                >Already have an account? Login!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      },
      terms: false
    };
  },
  computed: {
    isCompleted() {
      return (
        this.user.firstName &&
        this.user.lastName &&
        this.user.email &&
        this.user.username &&
        this.user.password
      );
    }
  }
};
</script>

