<template>
  <a href="#top_a" id="gotop" title="Yukarı git">&#8593;</a>
  <a href="#bot_a" id="gobottom" title="Aşağı git">&#8595;</a>
  <div id="top_section">
    <div class="container">
      <form
        id="search_form"
        class="floatright"
        action="http://localhost/fuchsia21/index.php?action=search2"
        method="post"
        accept-charset="UTF-8"
      >
        <input type="search" name="search" value="" />&nbsp;
        <select name="search_selection">
          <option value="all" selected>Forum</option>
          <option value="members">Üyeler</option>
        </select>
        <input type="submit" name="search2" value="Arama" class="button" />
        <input type="hidden" name="advanced" value="0" />
      </form>
      <ul class="floatright">
        <li>
          <a class="menu_icon mobile_user_menu"><i class="fas fa-bars"></i></a>
        </li>
      </ul>
    </div>
    <!-- .inner_wrap -->
  </div>
</template>
<script>
export default {
  name: "TopSection",
};
</script>