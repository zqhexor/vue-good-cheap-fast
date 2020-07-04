<template>
  <div class="output">
    <Toggler :size="2" :checked="checked[0]" @update="value=>updateHandler(0,value)">Good</Toggler>
    <Toggler :size="2" :checked="checked[1]" @update="value=>updateHandler(1,value)">Cheap</Toggler>
    <Toggler :size="2" :checked="checked[2]" @update="value=>updateHandler(2,value)">Fast</Toggler>
  </div>
</template>

<script>
  /* eslint-disable */
  /* （1） ./相对路径;@/绝对路径；.vue可省略;
     （2）components的名字首字母忽略大小写;
    */
  import Toggler from './Toggler'

  export default {
    name: 'Output',
    data () {
      return {
        checked: [false, false, false],
        indexes: []
      }

    },
    components: {
      Toggler,
    },
    methods: {
      updateHandler (index, value) {
        console.log(index, value)
        // 一般用上状态管理工具如 redux, mobx, vuex 等，都要保持 immutable 状态，即修改状态要 deepcopy，然后修改这份拷贝，再替换原状态
        if (value && !this.indexes.includes(index)) {
          let newIndexes = [...this.indexes]
          newIndexes.push(index)
          this.indexes = newIndexes
        }
        if (!value && this.indexes.includes(index)) {
          let newIndexes = [...this.indexes]
          newIndexes.splice(newIndexes.indexOf(index), 1)
          this.indexes = newIndexes

        }
        if (this.indexes.length === 3) {
          let newIndexes = [...this.indexes]
          newIndexes.splice(0, 1)
          this.indexes = newIndexes
        }
        let checked = [false, false, false]
        if (typeof this.indexes[0] !== 'undefined') {
          checked[this.indexes[0]] = true
        }
        if (typeof this.indexes[1] !== 'undefined') {
          checked[this.indexes[1]] = true
        }
        this.checked = checked
        console.log(this.checked)
      }
    }
  }
</script>

<style scoped>
  .output {
    display: flex;
    flex-direction: column;
  }
</style>
