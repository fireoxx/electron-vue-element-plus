<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-input v-model="search" placeholder="输入可搜索" />
        </el-col>
        <el-col :span="8">
          <el-button type="primary" icon="Plus" @click="onAddItem">Add Item</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="filterTableData" border>
      <el-table-column fixed prop="date" label="Date" width="150">
        <template #default="scope">
          <span v-if="!scope.row.isEdit && !scope.row.isNew">
            {{scope.row.date}}
          </span>
          <el-input v-else v-model="scope.row.date"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="120">
        <template #default="scope">
          <span v-if="!scope.row.isEdit && !scope.row.isNew">
            {{scope.row.name}}
          </span>
          <el-input v-else v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="State" width="120">
        <template #default="scope">
          <span v-if="!scope.row.isEdit && !scope.row.isNew">
            {{scope.row.state}}
          </span>
          <el-input v-else v-model="scope.row.state"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="city" label="City" width="120">
        <template #default="scope">
          <span v-if="!scope.row.isEdit && !scope.row.isNew">
            {{scope.row.city}}
          </span>
          <el-input v-else v-model="scope.row.city"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="Address" width="600">
        <template #default="scope">
          <span v-if="!scope.row.isEdit && !scope.row.isNew">
            {{scope.row.address}}
          </span>
          <el-input v-else v-model="scope.row.address"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zip" label="Zip" width="120">
        <template #default="scope">
          <span v-if="!scope.row.isEdit && !scope.row.isNew">
            {{scope.row.zip}}
          </span>
          <el-input v-else v-model="scope.row.zip"></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="150">
        <template #default="scope">
          <el-button
            v-if="!scope.row.isNew && !scope.row.isEdit"
            type="primary"
            size="small"
            @click.prevent="scope.row.isEdit=true"
          >
            编辑
          </el-button>
          <el-button
            v-if="scope.row.isNew || scope.row.isEdit"
            type="success"
            size="small"
            @click.prevent="save(scope)"
          >
            保存
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'
const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: '',
    state: '',
    city: '',
    address: '',
    zip: '',
    isNew: true
  })
  console.log(tableData.value)
}
const save = (scope) => {
  console.log(scope.row)
  //  参数效验 简化
  if (!scope.row.name) {
    ElMessage({
      message: '必须设置 Name',
      type: 'warning',
    })
  } else {
    // 验证完成 后续处理，简化
    scope.row.isNew = false
    scope.row.isEdit = false
  }
}
const search = ref('')
const filterTableData = computed(() =>
  // 内置数据搜索，后端接口则需改造
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>
