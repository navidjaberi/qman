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
            <v-icon size="x-large">{{ mode === "auth" ? "mdi-login" : "mdi-plus" }} </v-icon>
          </div>
          <KeepAlive>
            <component
              :is="dialogConditions"
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
import addItem from "../Global/AddItem.vue";
const props = defineProps<{
  dialogActive: boolean;
  mode: "auth" | "addItem";
}>();
const emit = defineEmits(["update:dialogActive"]);
const store = useAuthentication();
const authActive = ref(true);
const dialogConditions = computed(() => {
  if (props.mode === "addItem") {
    return addItem;
  } else if (props.mode === "auth") {
    if (authActive.value) {
      return userAuth;
    } else {
      return otp;
    }
  }
});
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
