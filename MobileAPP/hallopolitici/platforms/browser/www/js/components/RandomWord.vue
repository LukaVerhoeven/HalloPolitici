<template>
    <div>
        <h1>Random Word</h1>
        <button id="btn-get-random-word" @click="getRandomWord">Get Random Word</button>
        <p>{{randomWord}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            randomWord: ''
        }
    },
    mounted () {

    },
    methods: {
        getRandomWord: function() {
            this.randomWord = '...';
            this.$http.get(
                'http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
            ).then(function (response) {
                this.randomWord = response.data.word;
            }, function (error) {
                alert(error.data);
            });
        }
    }
}
</script>
