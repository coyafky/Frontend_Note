 <template>
    <div>
        <input type="text" v-model="account">
        <button @click="changeAccount">
            Change Account
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let account = ref('Abc');
function changeAccount() {
    account.value += 'XYZ';
}
</script>

<style lang="scss" scoped>

</style>>

