<template>
  <div>
    <v-dialog v-model="dialogActive" max-width="400">
      <v-card>
        <template #prepend>
          <v-btn icon="mdi-close" @click="dialogActive = false" size="large"></v-btn>
        </template>
        <div>
          <div
            class="size-20 bg-green-100 border-2 border-black rounded-full mx-auto flex align-center justify-center"
          >
            <v-icon size="x-large">mdi-login</v-icon>
          </div>
          <KeepAlive>
            <component
              :is="authActive ? userAuth : otp"
              @signedIn="signedIn"
              @signedUp="signedUp"
              @editPhoneNum="editPhoneNum"
              @confirmOTPCode="confirmOTPCode"
            />
          </KeepAlive>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import userAuth from "@/components/Global/TheUserAuth.vue";
import otp from "@/components/Global/TheOTP.vue";
const props = defineProps<{
  dialogActive: boolean;
}>();
const emit = defineEmits(["update:dialogActive"]);
const store = useAuthentication();
const authActive = ref(true);
const dialogActive = computed({
  get() {
    return props.dialogActive;
  },
  set(newVal: boolean) {
    emit("update:dialogActive", newVal);
  },
});
const signedIn = () => {
  authActive.value = false;
};
const editPhoneNum = () => {
  authActive.value = true;
};
const confirmOTPCode = () => {
  dialogActive.value = false;
  store.login();
};
const signedUp = () => {
  store.login();
  dialogActive.value = false;
};
</script>

<style></style>
