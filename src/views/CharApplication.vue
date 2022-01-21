<template>
  <div class="ucp-header">Karakter Başvurusu</div>
  <p>
    Fuchsia Roleplay sunucusuna karakter başvurusu göndermeden önce lütfen oyun
    ve forum kurallarını okuyunuz.
  </p>
  <hr />
  <div class="ucp-form">
    <div class="ucp-group">
      <div class="ucp-group-row">Karakter Adı:</div>
      <div class="ucp-group-row"><input type="text" /></div>
    </div>
    <div class="ucp-group">
      <div class="ucp-group-row">Karakter Yaşı:</div>
      <div class="ucp-group-row"><input type="number" max="90" min="13" /></div>
    </div>
    <div class="ucp-group">
      <div class="ucp-group-row">Uyruk:</div>
      <div class="ucp-group-row">
        <select>
          <option>test</option>
          <option>test</option>
          <option>test</option>
          <option>test</option>
          <option>test</option>
        </select>
      </div>
    </div>
    <div class="ucp-group">
      <div class="ucp-group-row">Karakter Geçmişi:</div>
      <div class="ucp-group-row"><textarea /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharApplication",
};
</script>

<style scoped>
.ucp-header {
  font-size: 21px;
  font-family: Roboto;
}

.ucp-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
}

.ucp-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.ucp-group-row {
  font-size: 13px;
  font-weight: bold;
  padding: 5px 10px;
}

.ucp-group-row input,
.ucp-group-row select {
  min-width: 160px;
}

.ucp-group-row textarea {
  min-width: 500px;
}
</style>