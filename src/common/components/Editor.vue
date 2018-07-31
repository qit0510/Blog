<template>
    <div class="editor">
        <quill-editor
                v-model="content"
                :content="edit"
                @change="onEditorChange($event)">
        </quill-editor>
    </div>

</template>
<script>

    import {quillEditor} from 'vue-quill-editor'
    export default {
        name:'Editor',
        props:{
            edit:{
                type:String
            },
        },
        components:{
            quillEditor
        },
        data() {
            return {
                content:'',
            }
        },
        methods: {
            onEditorChange() {//内容改变事件
                this.$emit("sendContent",this.content);
            },
        },
        mounted (){

        }

    }
</script>
<style>
    .ql-container{
        min-height: 333px !important;
    }
</style>