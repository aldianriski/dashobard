<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABjFBMVEVXUJT///9XUJZZT5T///3///xXT5ZZUJJWUZNTS5n///pZT5N6eJ3x8PXEwtdNRophWJXnQmL/uRZXT5r7uhhST5mqSX3uQWGng2BqT5DaRWXxQFxXUZCFTYBSR5XqRFztPmmZlbXaR150cJd8ZH//txbtQlDbQ2r/vwqeSYDrQGbqQ1WBbnBcUYtLRI5QU5WKaXDjTlunpMHKzNhSRp1ybJ1tTJPBk09qYplWU4l9dqbt7O1PVY9PSYdjSZjY2OKhemO5klr///BIR6SSjq2AfLJfV6HXp0RxUov8wwualb5GUJ1oZqHrrzekobJzY4hsWIdEO4nXrDOhd3fVpFHLRmOWSYKVS3VcWYimdGa1lUuOhrfPy+GbfHOyQInGgFfxpSCTZ2KPZYDIqjDiuSjdgEr8mi9TQqfyszLmikJ6TYO+Zmc8M4zKyOZGPHk1I4szJ3LBwMSpqbO1r9m1tbzb3NqwTmixSXRNXH3jXVNLRLXASnHmajv+N2LrlE2UfF3TRHeSRYv5ozSyk1MZ7q35AAARPUlEQVR4nO2bj3fbRLbHNZI90tiWZGeiuDQTOY7XTZpgGRSJWnZcQeuU5gcBL9AYkrLsz7K80Lfw6Oa9LTzYff/4u3dspy41LT1xUvac+Zw2lqWRMl/dmftDmmiaQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVBcCjqFH3ljOnmD6q+6g+fHMk3NajatZ2kKIUxT/3fXaJm82fSmosH/ZrP5qnt4Xgy2Z355b2EapwvX773FNPNVd/FcCDDg0uOVjWsb155lo1Iurzx+CwYrp6+gb/qI811ki5n3Vsvry1NZLJcq66XVex5viBn1+qU6NwuF+aZ+vbRYqlRWV64+y+rqanmxVK78wWPWjHr9spxboaXdvVopl0oLnrxbIx86vntbW40vHy+W1t+877EZ9filcGlAz62webpYKpXKpUPv5pZJ8yNGwZDD9Mufbiwv/u8PkWZcshk57zp2GvvG+Rwdbf5YKS3DKF2+p3k38882MJuvfVxe/m7nfrR1yc6GB1WSI6mbN853mcby4vrhwvelSmlJY1tTWjT3Fq6V3qzvfBjxc/2ml4a6Ti5H7NY5FXofLJdK/9z7+3q5VF7yplyLU3F9eePNL+o79/fO9ZteFl3vOoTk7CI/3yi1XgNfucSbCzAby4d7xlZ+cl6jtxHeQgVsOFef//3eZYZ+U3cdksnYRXq++T9SqInDxcXK8qHHbk4GvgmF8/W1nTduX+ZcnK3C5k3j9PuVSnlJ8ybnIipsjhTO1WEu+peYhM9WobB04/D7CmxajOtYUCB4abORlwrrc/Mg8T7T6LTsRkBTyin1PE6fxC8dgxkFPLiorlnDfdSgw5EAu6Bywy/DM3QITvBvfPpsFeJFrNMKRMZD77V7j1cxmxnx44/LZTkPkT/d97n4iU/FyKnRIHCL7UKvEHe7Oh930uJ+IOJCr3fUct3hHs2Ne4JJiZQbbrtgMWhmmgYPutDyKHbd0S2avUK+tbBRriyfrlauVdbPKKNsVIiAIa8E0xT6xapjE4ntDPxRC8q6vePR7rTnYlrEuwfQZCAzpDwLwFumCWplQSO0Mxk8P0z8C1Jo3TQX1mEuQhZXubYxLjU2yuX1M4U4F29Eg6cnIwgMenYukwMyUk01GB4Jtu1MNpPNDjU6LpzHEpLNZY5lAzPoEYh4VZNCdC/Yo5NBYy24GIXCaHqH4G6Wl1f//tnpRJH4cWX9zXduIO+t1etrn/5DcDHxW3WNF+1MDrqWzaBG6HQYURBOWxlplUwOPmGvA0kmFZCn5EgvoJqgDTsHB6swFYMC7CS5W3CFTC5L2j4M59krBFvQL9chufnLh7eTKBkn4U1tYWP5zbwfRRHzr+yAFX/jWZPpHdVYAW899BbUICQTo8LgCPfmpMocGrLg6sIPs3AniAmTsH+MqmzwXF7DxhuBV8lie5tbF6RQP4U6469rOz9ETekHZbTgC4vLK1wA/L8ffDhXX7txe3BzikKnPXC7SSFFI6VdD23YgSF3UBPdLuwFCWkX3BRL8R4cP+T+Ltg1l92GSQvzETY7PbObVHE45Bz3IkYpKPRWN9b/Zw3Sl7ddbgx9uG7pqFB4nDPwgd136/UvoiSaCBljhbs+lAOe9zBFS7YoDok4DEXgcfAkQQdsBBmYJ/xYDtxqv5VFgWGf6mYAps6SODDA49TsLIh1L8KGFtV0cDIL/wcDcf4TBgOV4ygVOozSFTShAK9++8rc/BwX3kT+JhWCWaq+wL20jeO1isGBMxeCi2XBmW6IloshMujBAbTO2e8fw6jOpi5EChbj+Y4PWnSwJ47WNptx1iYVcitfKVXu+TfmISq8fTvxEl3uRoVy5oFZGCrUTGsiR3+i0MRGeoIjzpHuUDQExHDOGPN3wXCkho8KDHcTJyXOvAwZcMM08SAhPV/DmRFVCRyuXqDC603/xg5KfLAlo9bLKpQecqhQZzxwu602EIfgRIYKNTaQfkX6VDChQf0qKoxPgj5SI+CQw4tUuOX574AV58CKkFZNU6g/V6GwM2Mb0qCagnfMYrS4NbahJoJCNiuDn/PQxAcJfij90OaQFKWHwQUohHrfWASFOtzUT+fm12AuNljiiWcVWqb38woFx7Dh+JCr0tgmEPLHkXyskNLIwe+3bN+CcQmjtEp+SuhfhEI+VmhwkFif2/nkdrPZmGJDy9RfrFDoKFDmMxkZ8UHoUCEkeTW5+9sAEnLdGCrEWzHmFunRC/ClEwqF599Yw7kYNdlUG/4ChQ3ehdAI/Sa2BObd2Iama0vdpMCeKHyK4+5FxMOxQhDCE6a9s1ZfW3s7SihfqLyUQl0qDAQrgDWyJKwVkRDNWUPfZXL3K2wCGavdpZaeHyncdM6odvnMFIq3sCj0JhXiixhdo+4N0IJW5Ke/QCHm2yNPk0hP4+pBCJ/Z3QDrRnA52AQUQgDyj0BfDvNXcDX45kt6GlI7Cc7AMDVThU/bcAiDuTg3N//J3t4vGaVPFEL1AKYLQeFXmGJ2NfmoYKwQ4iMr2rfQj8rh2Ivok3hoPlW0zFQhm/Slo5dpiRd9KkO/+9kvsyH0EHMaKInAp+yCQgcVulBEaE8pdDdhembSPhgucwsSOS5YS47SwBjmiTSgM1VYKi1e38MqVudNigo9KoFfHEHoX9u5f3ptfUU3X6jw2A185gWJjVnXgMIoxdkW9n1IaXi/SqQvlc95sQ6p+UEKpRJJ+yCnj0kCafcjxt2guxvC5J9dXmqsLlYe32w2hdgyt7akDcUZEYT+tc9XlsuPPfFChTn7oDCohRghMseuBnk3+h+yWajFcS9Mse6rceq1QCoIdzmPoWUWt7CkkgVkbVDDZwUgi81Moba1sLhSXmhC7qgzj6NCxp/gfbpW/660vnjP016scFjLZ6DCI3EkuOkew3AcVe4QEMGvxrreTbHGBcvRfBDicUiyLcvHWnjUEiPnbjCzUbpFzavr65XTpbyZNJIGKoR0uTHCaN783XfrpasbQkAEfoHCUWiXhZSrW5AQtWwiv2azw8TG1jitST/aAv9i0n6KNwVKf27sd1BhBhpmMflp0xmOUnqvhE+bhg/WyuONEVdXlyuV5dK/fgigmPKerxATT5m92EeYlFJoNAArYtEuU7dMp2byaIBWPYjwRJ0NsK4PXcqgakxv5WQCC7eis9ulWBeHcL1Ocs7Xz5ZhWAvr+AZRUpb/ziivl9dL1679q16/f3tLT56vcHc3hVTFTsOWOzpKfbdwbGP+YqebYZyHapPmqzZxusMGzO3ZZDMxDSj9efdIPpazHzkFozv07Y2U2AXtnC+ELPAI3kKpMiGr8oTFSmWj8tnvMIG7Aglc/vnxMHCtVivp+tHZGz/T7Lq02Bq0LB75FPpqCu4PBi4bNoCqQgx8qJ8M2OSuqxfhfO5Tkw8fH7NgYHFOz/m2BCpwY+9w8UzfysdPL8e495rnQklch5K4YeSfH/GxbNChR+MuwbahyYfeutYQ0FDn0HceGfKRK75xFjAzDaiBZdBEE1Pdo/gUimPalgimgUc/n0DU2DT40vLIiuvlw2bzbHlNU9cx/t/GYmoNiqkoiV6Yl86Qmb0kgUHSXBoNVFCoP7sIwn8HnwV/cnuL5y9T4cwwNOtmc2n5ZxXqCRRT83P1tbcfJA+kQvGcCvjXiGUZWzfZEoSKdVB43Tt7VDq2IUt0CsXU/PyVBxooXDONyacYugkKs1lU+CtePGUYeW9pdQOMuHi4J/JnRhwB8x+Lqfr8lX+Awvkk2ppUKG1IfvUKDaP5JUhcKf+H12ww/RmGc3H+k4/qc18kUGc9OZfrvIbF3q5vnm9NwYWCCrl3d7W8svzX1yPxrEIqi6k5GKn1tY/23mpOWEuHjC6FFLrxzJvFXxWgULDm3avl8ue/vcswWmDiPZYHmyD7wac7UBN/Pv/7yJhUqAnda4ThwKTmq1je93Lob/35LzDbbrwBvA68MeL1IX94Dxcs/DGacmIQ/PrVSfbe/xO+Bl1DwF5rI4abcztz9bm19+7+W6+o5c2778Jsw7e980B9yPyIOhz46IOo8ap7eS503fzwt/PzaLj54cfE5lz93bd5k09JFOVyRvw5hBrTgz+0ghz06TVJdIxpGlPSNEsbruEQs1tuLhoP7v5mOu9/4O5N/zWYUQ/TZYlB+TS3aqLL4pMhBRec4LoWXDH/9JGzK0Mur2nDnH1GcJY0cfk6Ml6yP0Iw9jOJPpVpEB17G+ht99kOWRbXXM4m3TAoFJz5PmM86E6tk7g2LETo7P4qwmpqlE8Hy5+p59zZhgqQW63tO8Pveb69eecnbWg/0PTCZotPrhelVOxvt9vt7e3GrvNUsAlG6zn07RYuKbK29+kr89Yy87bzjAUp6TEYiUwXfpUUuWDcaujMEnj3aUIOgmCX7DPBTJHnLhSCkAOJ4fNuQpKv7FZkQj1oeYLnebCZ+pTiWgCSM7kVHJMQy0+dNahFTdbwIhhb3OP0nGszf7lC4kTRASGFyCjWapxFVTKIzLgYdePtlgyVXkwOirxKWrW2yRlltUKRcirgXuQKrXg/NpIB4zEdxKwRtxNK006rNVyxkkuDqJdBhd1BIe5GxVhEPKlZTBTaJqWXUM9IhSlpt+BHL+iBPTqFaJdwMGk72SQ5UnV1zejatzKkvZv5Gg4X/aRDMnbB50Ja+6QfuP5XtqiRb8ix+4jcsuP/wvfIUR4U5uCqwu5kw6DrQG6YJi1y4LoOKcY2NryMsSsVFjqd1G6TXtTqFdudtF8lyaYdn4Sk7TukBV6IF4gTs2rmuBVmwn5qt0Rqm0OFzreOcxQ4thnnyGb7iMQszN951ImlDYuZapr7OlOAkw7IQatHjk8e2X3e2ex37OKdTmpeQi48VBgT0o5B4SA8dh51oN+bmZ4f2I96uweZqgtuqEhCF+ehW8w4bubr3u63pIYlS5XYHbsT9h1bxNnjvhuTzkHRjR6lrsVxlGZDkc1WW5nwBG6c1/+WuHAP2qRgEqfX+5oMLuGPCKTCo77jPGzDR4d8E3ZQYS6buq7dSYEjyjUdFAawe98Chd2c3B9TCxXGXXC+PiqEGpP67eMcKfTTjq8JOQ/DkzAN9jPh33LHJwwM2QjsbzY7PkwKZP+yRmnPF4LDKDVJ+J8nKSosHJHw5KvMw5OH+65OBQeFfbShVcw5fTv920mxBZ5TKmQ6o4FUuMu0Vnxycss5Se2HrrRhLozMgQ8KTzZJ7WFip77v5DJh9JBsymtcRg6Jc6zHDI5CA5g0aa4TVMmd4GtSG9gkxQfzuuCWnSG1A5ADNgzaOTslaRfKsyAkNSrksgTwNFXXDUknBRuCV3FcqfCbAMJDnDnwE5vYJFNj7H0Cl3R7pPMIXwlcvEBBeSuMIR+Bj33WDZ1Ce9ffD4WehEc+fA1lJNd5/E2ot8IiE9U2dYuh00sgWlC9Fra4BtlOocqLYcz1IA6ddsB46MToRO5UY5hpehE+IrfqhA2f0261CtmD23KcXpdfQrSwKOMuRYU8gNHoBxzs2YjgK6MiH8F3VGhhcmbmI69BIUXTWAAiICPTOXUxh+W6ALkMJixcJWINwQJX5mnclbUM9TnEPnxDyYVp+LjGltLAh0TrEhRizs+5aeq4BeYAIG2RqUbDoHkzL7M07K1Jca/sOC5Q1U2h4Un6cMU3ZoQyEc+bYFrIxPOYBPPGMCHHP1LKQ80C4CbuMg3cvIRRqk/+57r8lGYzteEy9eG7a820pDhdHpB7zacuMVwePjqfj+4EvsIaRjzMveX5FN+HaNqTCysUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKxcXz/zOubM9aYF+CAAAAAElFTkSuQmCC"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="login">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="email"
                        v-model="username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <b-button
                      variant="primary"
                      type="submit"
                      :disabled="loading"
                      class="btn-user btn-block"
                    >
                      Login
                      <b-spinner v-if="loading" small label="Loading..."></b-spinner>
                    </b-button>
                  </form>
                  <hr />
                  <!-- <div class="text-center">
                    <router-link
                      :to="{name: 'forgotpass'}"
                      class="small text-primary"
                    >Forgot Password?</router-link>
                  </div>
                  <div class="text-center">
                    <router-link
                      :to="{name: 'register'}"
                      class="small text-primary"
                    >Make a New Account!</router-link>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var datanya = {
  username: "ebie",
  password: "ebie"
};

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    login() {
      // this.loading = true;
      // let formData = new FormData();
      // formData.append("username", this.username);
      // formData.append("password", this.password);
      // this.$store
      //   .dispatch("retrieveToken", formData)
      //   .then(response => {
      //     this.loading = false;
      //     this.$session.start();
      //     this.$session.set("jwt", response.data.data);

      //     console.log(response);
      //   })
      //   .catch(error => {
      //     this.loading = false;
      //     this.serverError = error.response;
      //     this.password = "";
      //     this.successMessage = "";
      //     console.log(error);
      //   });
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>