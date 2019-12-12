import axiosServer from "@/common/baseServer/axiosServer";
import axios from "axios";
export default {
  state: {
    loading: null,
    self: null
  },
  actions: {
    // eslint-disable-next-line no-empty-pattern
    Logout({}, params) {
      axiosServer.http("/api/Session", "DELETE", "", {
        success(response) {
          if (
            params.$refs &&
            params.$refs.changePassword &&
            params.$refs.changePassword.clearPassword &&
            params.$store.state.Project.loading
          ) {
            params.$store.state.Project.loading.close();
          } //是修改密码跳转过来的
          if (response.data.code == 200) {
            if (
              params.$refs &&
              params.$refs.changePassword &&
              params.$refs.changePassword.clearPassword
            ) {
              params.$store.state.Project.IsShowForPassword = false;
            } //是修改密码跳转过来的
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userid");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("userViewModel");
            params.$router.push({ path: "/login" }); //动态路由跳转至登录界面
          }
        }
      });
    },
    // eslint-disable-next-line no-empty-pattern
    Login({ state }, params) {
     
      state.loading = state.self.$loading({ fullscreen: true });
      axios({
        url: "http://192.168.8.10:8091/api/Session",
        method: "post",
        data: params
      }).then(response => {
        if (response.data.code == 200) {
          if (response.data.data.user) {
            response.data.data.user.name =
              response.data.data.user.jobNumber +
              "(" +
              response.data.data.user.username +
              ")";
          }
          if (params.checked) {
            localStorage.setItem("login_username", params.username);
            localStorage.setItem("login_password", params.password);
          } else {
            localStorage.removeItem("login_username");
            localStorage.removeItem("login_password");
          }
          sessionStorage.setItem("token", response.data.data.token);
          sessionStorage.setItem(
            "userViewModel",
            JSON.stringify(response.data.data.user)
          );
          let userId = response.data.data.user.id;
          sessionStorage.setItem("userid", userId);
          sessionStorage.setItem("username", response.data.data.username);
          if (userId != "") {
            let _condition = { userId: userId };
            
            axiosServer.http(
              "/api/FuncPermission?condition" +
                encodeURIComponent(JSON.stringify(_condition))+
                "&pageIndex=-1&pageSize=-1",
              "get",
              '',
            
              {
                success(response) {
                  sessionStorage.setItem(
                    "permission",
                    JSON.stringify(response.data.data.rows) //数据转成json格式
                  );
                  state.self.$router.push({ path: "/main" }); //登录成功之后跳转到/main
                },
                error(e) {
                  state.loading.close();
                  state.self.$message({
                    showClose: true,
                    message: e,
                    type: "error"
                  });
                }
              }
            );
          } else {
            axiosServer.http("/api/FunctionPermission", "get", "", {
              success(response) {
                sessionStorage.setItem(
                  "permission",
                  JSON.stringify(response.data.data.rows)
                );
                state.self.$router.push({ path: "/main" });
              },
              error(e) {
                state.loading.close();
                state.self.$message({
                  showClose: true,
                  message: e,
                  type: "error"
                });
              }
            });
          }
        } else {
          state.loading.close();
          state.self.$message({
            showClose: true,
            message: response.data.msg,
            type: "error"
          });
        }
      });
    }
  },
  mutations: {}
};
