<template>
  <base-dialog :show="show" @close="$emit('close')">
    <base-card>
      <base-card-title :title="title" />
      <base-card-content>
        <div v-if="!!error" class="border-red-500 bg-red-100 text-red-500 rounded p-4 mb-4">
          {{ error }}
        </div>
        <base-grid>
          <base-grid-item width="full" class="md:w-1/2">
            <div
              class="wallet-btn bg-gray-100 text-gray-700 py-8 flex flex-col items-center justify-end cursor-pointer rounded hover:bg-gray-200 hover:text-gray-800"
              @click="$emit('clicked', 'metamask')"
            >
              <img :src="require('~/assets/images/wallets/metamask.svg')" alt="MetaMask logo" class="h-24 lg:h-32 w-auto">
              <span class="font-bold text-lg">
                {{ $t('labels.metamask') }}
              </span>
            </div>
          </base-grid-item>
          <base-grid-item width="full" class="md:w-1/2">
            <div
              class="wallet-btn h-full bg-gray-100 text-gray-700 py-8 flex flex-col items-center justify-end cursor-pointer rounded hover:bg-gray-200 hover:text-gray-800"
              @click="$emit('clicked', 'walletConnect')"
            >
              <img :src="require('~/assets/images/wallets/walletconnect.svg')" alt="WalletConnect logo" class="h-16 lg:h-20 w-auto mb-6">
              <span class="font-bold text-lg">
                {{ $t('labels.walletconnect') }}
              </span>
            </div>
          </base-grid-item>
        </base-grid>
      </base-card-content>
    </base-card>
  </base-dialog>
</template>

<script>
export default {
  name: 'WalletDialog',

  props: {
    show: { type: Boolean, default: false },
    title: { type: String, default: 'Connect Wallet' },
    error: { type: String, default: '' }
  }
}
</script>
