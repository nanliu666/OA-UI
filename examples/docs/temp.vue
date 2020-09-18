<template>
  <mg-table
    :columns="columns"
    :row-key="(record) => record.key"
    :data-source="data"
    :page.sync="page"
    :loading="loading"
    @change="handleTableChange"
  >
    <template
      slot="name"
      slot-scope="name"
    >
      {{ name.first }} {{ name.last }}
    </template>
  </mg-table>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

export default {
  data() {
    return {
      data: [],
      page: {
        current: 1,
        pageSize: 5,
        total: 100
      },
      loading: false,
      columns
    }
  },
  mounted() {
    this.fetch(this.page)
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch(this.page)
    },
    fetch({ current, pageSize }) {
      const sum = current * pageSize
      this.loading = true
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve(
              new Array(pageSize).fill().map((_, i) => ({
                key: i + sum,
                name: `name${i + sum}`,
                gender: `${i % 2 ? 'male' : 'female'}`,
                email: `email${i + sum}@epro.com.cn`
              }))
            ),
          5000
        )
      })
        .then((result) => (this.data = result))
        .finally(() => (this.loading = false))
    }
  }
}
</script>
``` :::
