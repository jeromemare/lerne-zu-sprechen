<template>
  <q-page class="flex justify-center">
    <div class="q-gutter-y-md column">

          <q-input
          class="input"
          type="textarea"
          autogrow
          :class="{ 'input-text': !!sentence }"
          v-model="sentence"
          :lines="2"
          hint="Saisir une phrase ou un mot à prononcer"
          clearable
           style="width: 80vw; max-width: 400px"
        >

        <template v-slot:after>
          <q-btn
            v-if="isArtyomReady"
            round
            dense
            flat
            :disable="!sentence || isSpeaking || isRecording"
            icon="mdi-account-voice"
            @click="speak"
          >
            <q-tooltip>Ecouter le mot ou la phrase</q-tooltip>
          </q-btn>
        </template>

      </q-input>

      <div>
        <div class="record-button center">
          <q-btn
            :icon="buttonIcon"
            :disable="!sentence || isSpeaking"
            :loading="isProcessing"
            :color="isRecording ? 'red' : 'primary'"
            round
            size="30px"
            @click="toggleRecord"
          >
            <q-tooltip>{{ recordTooltip }}</q-tooltip>
            <template v-slot:loading>
              <q-spinner-gears />
            </template>
          </q-btn>
        </div>
      </div>

      <q-list
        v-if="results.length > 0"
        class="result-list"
      >
        <q-item>
          <q-item-section>
            <q-item-label class="result-title">
              Résultats
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense icon="mdi-trash-can-outline" @click="clearResults"></q-btn>
          </q-item-section>
        </q-item>
        <q-item
          v-for="result in results"
          :key="result.fmtDate"
          :style="`background-color: ${result.color}`"
          class="result-tile"
        >
          <q-item-section>
            <q-item-label class="result">
              {{ result.text }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label caption class="result-score">{{ result.score }} %</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import format from 'date-fns/format'
import chroma from 'chroma-js'
import Artyom from 'artyom.js'

const sentence = ref('')
const isRecording = ref(false)
const isProcessing = ref(false)
const results = ref([])

const buttonIcon = computed(() => {
  return isRecording.value ? 'stop' : 'mic'
})

const recordTooltip = computed(() => {
  if (!sentence.value) {
    return 'Vous devez saisir un mot ou une phrase'
  }

  return isRecording.value ? 'Arrêter' : 'Enregistrer'
})

let mediaRecorder = null

async function validate (audio) {
  try {
    const data = {
      input: sentence.value,
      audio,
      profile_name: 'default',
      speaker_id: 'test',
      persist: !1,
      original_word_mapping: !0
    }

    const response = await axios.post(process.env.API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    })

    const { utterance_score: scoreIndice } = response?.data || {}
    if (scoreIndice) {
      const date = new Date()
      const score = Math.round(scoreIndice * 100)
      const colorScale = chroma.scale(['red', 'orange', 'lightgreen']).mode('hsl')
      const color = colorScale(scoreIndice).hex()
      results.value.unshift({
        date: format(date, 'yyyyMMddHHmmss', new Date()),
        fmtDate: format(date, 'HH:mm', new Date()),
        text: sentence.value,
        score,
        color
      })
    }
  } finally {
    isProcessing.value = false
  }
}

async function recordAudio () {
  if (navigator.mediaDevices) {
    const constraints = { audio: true }
    let chunks = []

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      mediaRecorder = new MediaRecorder(stream)
      mediaRecorder.start()

      mediaRecorder.onstop = (e) => {
        isProcessing.value = true
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
        chunks = []
        const fileReader = new FileReader()
        fileReader.readAsDataURL(blob)
        fileReader.onloadend = function () {
          const audioBase64 = fileReader.result
          let audio = audioBase64.slice(22)
          audio = audioBase64.split('base64,')[1]
          validate(audio)
          mediaRecorder = null
        }
      }

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }
    }).catch((err) => {
      console.error(`The following error occurred: ${err}`)
    })
  }
}

function stopRecordingAndValidate () {
  mediaRecorder.stop()
}

async function toggleRecord () {
  isRecording.value = !isRecording.value
  if (isRecording.value) {
    await recordAudio()
  } else {
    stopRecordingAndValidate()
  }
}

const isArtyomReady = ref(false)

const artyom = new Artyom()
artyom.initialize({
  debug: false,
  continuous: false,
  listen: false,
  lang: 'de-DE'
}).then(() => {
  isArtyomReady.value = true
})

const isSpeaking = ref(false)

async function speak () {
  artyom.say(sentence.value, {
    onStart: function () {
      isSpeaking.value = true
    },
    onEnd: function () {
      isSpeaking.value = false
    }
  })
}

function clearResults () {
  results.value = []
}

</script>

<style scoped>
.record-button {
  padding-top: 20px;
}

.input-frame {
  padding-top: 20px;
}

.input {
  padding-right: 20px;
}

.input-text {
  font-size: 1.4em;
}

.container {
  padding-top: 20px;
  position: relative;
}

.center {
  position: absolute;
  margin-left: -50px;
  left: 50%;
}

.result {
  font-size: 1.8em;
}

.result-score {
  font-size: 1.8em;
}

.result-tile {
  border-radius: 8px;
}

.result-title {
  font-size: 1.2em
}

.result-list {
  padding-top: 100px;
}
</style>
