<template>
  <div id="header">
    <div class="container">
      <div class="logo_wrapper">
        <h1 class="forumtitle">
          <a id="top" href="http://localhost/fuchsia21/index.php"
            >Fuchsia Roleplay</a
          >
        </h1>
        <img
          id="smflogo"
          src="http://localhost/fuchsia21/Themes/fuchsia/images/smflogo.svg"
          alt="Simple Machines Forum"
          title="Simple Machines Forum"
        />
      </div>
      <div id="main_menu">
        <div id="mobile_user_menu" class="popup_container">
          <div class="popup_window description">
            <div class="popup_heading">
              Mobil Ana Menü
              <a href="javascript:void(0);" class="main_icons hide_popup"></a>
            </div>

            <ul class="dropmenu menu_nav">
              <li class="button_home">
                <router-link to="/">
                  <a class="main-menu-custom" href="/"
                    ><i class="fa fa-home fa-lg"></i>Panel</a
                  >
                </router-link>
              </li>
              <li class="button_char_app">
                <router-link to="/karakter-basvurusu">
                  <a class="main-menu-custom" href="/karakter-basvurusu"
                    ><i class="fa fa-user fa-lg"></i>Karakter Başvurusu</a
                  >
                </router-link>
              </li>
              <li class="button_admin subsections">
                <a href="http://localhost/fuchsia21/index.php?action=admin">
                  <a
                    class="main-menu-custom"
                    href="http://localhost/fuchsia21/index.php?action=admin"
                    ><i class="fa fa-gavel fa-lg"></i>Oyun Yönetimi
                    <span class="amt">41</span></a
                  >
                </a>
                <ul>
                  <li>
                    <a>Karakter Başvuruları</a>
                  </li>
                  <li>
                    <a>Karakter Başvuruları</a>
                  </li>
                  <li>
                    <a>Karakter Başvuruları</a>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- .menu_nav -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>