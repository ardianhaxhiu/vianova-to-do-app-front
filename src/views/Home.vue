<template>
  <div class="container mt-5">


    <!-- Add task modal-->
    <b-modal :no-close-on-backdrop="true" :hide-header-close="true" ref="add-modal" hide-footer title="Add New Task">

      <div class="row">
        <div class="col-12">
          <b-form-input v-model="newTaskData.name" placeholder="Enter task name" class="mb-2"></b-form-input>
          <b-form-select v-model="newTaskData.level" :options="levelImportanceOfTask"></b-form-select>
        </div>
        <div class="col-12 d-flex">
          <div class="col-6 ml-auto">
            <b-button class="mt-3 ml-4 mr-1" variant="info" @click="hideModal">Close</b-button>
            <b-button class="mt-3" variant="primary" @click="addTask" :disabled="!!isAdding">{{ isAdding ? 'Adding' : 'Add task'}}</b-button>
          </div>
        </div>
      </div>
    </b-modal>

    <!-- Edit task modal-->
    <b-modal :no-close-on-backdrop="true" :hide-header-close="true" ref="edit-modal" hide-footer title="Edit Task">

      <div class="row">
        <div class="col-12">
          <b-form-input v-model="editData.name" placeholder="Enter task name" class="mb-2"></b-form-input>
          <b-form-select v-model="editData.level" :options="levelImportanceOfTask"></b-form-select>
        </div>
        <div class="col-12 d-flex">
          <div class="col-6 ml-auto">
            <b-button class="mt-3 ml-4 mr-1" variant="info" @click="hideEditModal">Close</b-button>
            <b-button class="mt-3" variant="primary" @click="updateTask" :disabled="!!isUpdating">{{ isUpdating ? 'Editing' : 'Edit task'}}</b-button>
          </div>
        </div>
      </div>
    </b-modal>

    <!-- Delete task modal-->
    <b-modal :no-close-on-backdrop="true" :hide-header-close="true" ref="delete-modal" hide-footer title="Delete Task!">

      <div class="row">
        <div class="col-12">
          <h6>Are you sure you want to delete this task?</h6>
        </div>
        <div class="col-12 d-flex">
          <div class="col-6 ml-auto">
            <b-button class="mt-3 ml-3 mr-1" variant="info" @click="hideDeleteModal">Cancel</b-button>
            <b-button class="mt-3" variant="danger" @click="deleteTask">Delete task</b-button>
          </div>
        </div>
      </div>
    </b-modal>

    <div class="row">
      <div class="col-12">
        <b-button variant="primary" class="float-right" id="show-btn" @click="showModal">New Task</b-button>
      </div>
    </div>
    <div class="row mt-5">

      <!-- To do tasks -->
      <div class="col-4 mt-5">
        <div class="p-2 alert alert-primary">
          <h3>To Do</h3>

          <draggable
              class="list-group column"
              :list="toDoTasks"
              group="tasks"
              @end="checkEndToDo"
              id="toDoTasks"
              :key="toDoTasks.id"
              :disabled="isUpdating"
          >
            <div
                class="list-group-item mb-2"
                v-for="(element, i) in toDoTasks"
                :key="element.id"
                @dblclick="editTask(element, i)"
                :class="[changeBackgroundByLevel(element.level)]"
            >

              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <!-- In progress tasks -->
      <div class="col-4 mt-5">
        <div class="p-2 alert alert-warning">
          <h3>In Progress</h3>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <draggable
              class="list-group column"
              :list="onProgressTasks"
              group="tasks"
              @end="checkEndOnProgress"
              id="onProgressTasks"
              :disabled="isUpdating"
          >
            <div
                class="list-group-item mb-2"
                v-for="(element, i) in onProgressTasks"
                :key="element.id"
                @dblclick="editTask(element, i)"
                :class="[changeBackgroundByLevel(element.level)]"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <!-- Done tasks -->
      <div class="col-4">
        <b-form-input v-model="search" placeholder="Search" class="mb-2"></b-form-input>

        <div class="p-2 alert alert-success position-relative">
          <h3>Done</h3>
          <!-- Done draggable component. Pass arrDone to list prop -->
          <draggable
              class="list-group column position-relative"
              :list="doneTasks"
              group="tasks"
              @end="checkEndDoneTasks"
              id="doneTasks"
              :disabled="isUpdating"
          >

            <div
                class="list-group-item mb-2 position-relative"
                v-for="(element, i) in doneTasks"
                :key="element.id"
                @dblclick="editTask(element, i)"
                :class="[changeBackgroundByLevel(element.level)]"
            >
              <p>{{ element.name }}</p>
              <span style="font-size: 15px; position: absolute; bottom: 0; right: 0">{{element.updated_at}}</span>
              <b-icon @click="showDeleteModal(i,element.id)" icon="trash-fill" aria-hidden="true"
                      style="position: absolute; top: 25%; right: 0; cursor: pointer"></b-icon>

            </div>

          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import draggable
import draggable from "vuedraggable";

export default {
  name: "todo-app",
  components: {
    draggable
  },
  data() {
    return {
      toDoTasks: [],
      onProgressTasks: [],
      doneTasks: [],
      newTaskData: {
        name: '',
        level: null,
      },
      selected: null,
      levelImportanceOfTask: [
        {
          value: 1,
          text: 'Low'
        },
        {
          value: 2,
          text: 'Medium'
        },
        {
          value: 3,
          text: 'High'
        },
      ],
      index: null,
      editData: {
        name: '',
        level: null,
        status: null
      },
      editIndex: null,
      search: '',
      deleteData: {
        deleteIndex: '',
        deleteTaskId: ''
      },
      isUpdating: false,
      isAdding: false,
      orderDesc: false,
      orderAsc: false
    };
  },
  methods: {
    showModal() {
      this.$refs['add-modal'].show()
    },
    hideModal() {
      this.$refs['add-modal'].hide();
    },
    hideEditModal() {
      this.$refs['edit-modal'].hide();
      this.editData = {};
    },

    showDeleteModal(deleteIndex, deleteTaskId) {
      this.$refs['delete-modal'].show()
      this.deleteData.deleteIndex = deleteIndex;
      this.deleteData.deleteTaskId = deleteTaskId;
    },

    hideDeleteModal() {
      this.$refs['delete-modal'].hide();
      this.deleteData = {}
    },

    async deleteTask() {
      let res = await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.deleteData.deleteTaskId}/delete`);
      if (res.data.data.status === 1) {
        this.toDoTasks.splice(this.deleteData.deleteIndex, 1);
      } else if (res.data.data.status === 2) {
        this.onProgressTasks.splice(this.deleteIndex, 1);
      } else {
        this.doneTasks.splice(this.deleteData.deleteIndex, 1);
      }
      this.$toast.success('Task has been removed successfully!', {position: 'top-right'});
      this.$refs['delete-modal'].hide()
    },

    async addTask() {
      this.isAdding = true;
      let res = await this.callApi('POST', 'https://to-do-app-vianova.herokuapp.com/api/v1/task/store', this.newTaskData);

      if (res.status === 200) {
        if (res.data.data.status === 1) {
          this.toDoTasks.unshift(res.data.data);
        } else if (res.data.data.status === 2) {
          this.onProgressTasks.unshift(res.data.data);
        } else {
          this.doneTasks.unshift(res.data.data);
        }
        this.data = {};
        this.$refs['add-modal'].hide()
        this.$toast.success('Task has been added successfully', {position: "top-right",});

      } else if (res.data.errors) {
        for (let key in res.data.errors) {
          for (let i = 0; i < res.data.errors[key].length; i++) {
            this.$toast.error(res.data.errors[key][i], {position: "top-right",});
          }
        }
      }
      this.newTaskData = { name: '', level: null};
      this.isAdding = false;

    },

    editTask(task, index) {
      this.$refs['edit-modal'].show()

      this.editData = {
        id: task.id,
        name: task.name,
        level: task.level,
        status: task.status
      };
      this.editIndex = index;
    },

    async updateTask() {
      this.isUpdating = true;
      let res = await this.callApi('PATCH', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.editData.id}/edit`, this.editData);

      if (res.status === 200) {
        if (res.data.data.status === 1) {
          this.toDoTasks.splice(this.editIndex, 1, res.data.data);
        } else if (res.data.data.status === 2) {
          this.onProgressTasks.splice(this.editIndex, 1, res.data.data);
        } else {
          this.doneTasks.splice(this.editIndex, 1, res.data.data);
        }
        this.$refs['edit-modal'].hide();
        this.editData = {};
        this.$toast.success('Task updated successfully!', {position: 'top-right'});
        this.isUpdating = false;

      }
    },


    /**
     * When dragging from to do tasks this function is going to check the task where is ended
     *
     * @param evt
     * @returns {Promise<void>}
     */
    async checkEndToDo(evt) {
      this.isUpdating = true;
      if (evt.to.id === 'onProgressTasks') {
        await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.onProgressTasks[evt.newIndex].id}/change-status`, {
          status: 2
        });
        this.$toast.success('Task moved to on progress tasks!', {position: 'top-right'});
      } else if (evt.to.id === 'doneTasks') {

        await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.doneTasks[evt.newIndex].id}/change-status`, {
          status: 3
        });
        this.$toast.success('Task moved to done tasks!', {position: 'top-right'});
      }
      this.isUpdating = false;

    },


    /**
     * When dragging from on progress tasks this function is going to check the task where is ended
     *
     * @param evt
     * @returns {Promise<void>}
     */
    async checkEndOnProgress(evt) {
      this.isUpdating = true;
      if (evt.to.id === 'toDoTasks') {

        await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.toDoTasks[evt.newIndex].id}/change-status`, {
          status: 1
        });
        this.$toast.success('Task moved to do tasks!', {position: 'top-right'});
      } else if (evt.to.id === 'doneTasks') {

        let res = await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.doneTasks[evt.newIndex].id}/change-status`, {
          status: 3
        });
        this.doneTasks.splice(evt.newIndex, 1, res.data.task);
        this.$toast.success('Task moved to done tasks!', {position: 'top-right'});
      }
      this.isUpdating = false;
    },

    /**
     * When dragging from done tasks this function is going to check the task where is ended
     *
     * @param evt
     * @returns {Promise<void>}
     */
    async checkEndDoneTasks(evt) {
      this.isUpdating = true;
      if (evt.to.id === 'toDoTasks') {
        await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.toDoTasks[evt.newIndex].id}/change-status`, {
          status: 1
        });
        this.$toast.success('Task moved to do tasks!', {position: 'top-right'});
      } else if (evt.to.id === 'onProgressTasks') {
        await this.callApi('POST', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.onProgressTasks[evt.newIndex].id}/change-status`, {
          status: 2
        });
        this.$toast.success('Task moved to on progress tasks!', {position: 'top-right'});
      }
      this.isUpdating = false;
    },


    changeBackgroundByLevel(level) {
      if (level === 1) {
        return 'low';
      } else if (level === 2) {
        return 'medium';
      } else {
        return 'high';
      }
    },


  },

  async created() {
    const toDoTasks = await this.callApi('GET', 'https://to-do-app-vianova.herokuapp.com/api/v1/task/1/all');
    const onProgressTasks = await this.callApi('GET', 'https://to-do-app-vianova.herokuapp.com/api/v1/task/2/all');
    const doneTasks = await this.callApi('GET', 'https://to-do-app-vianova.herokuapp.com/api/v1/task/3/all');

    if (toDoTasks.status === 200) {
      this.toDoTasks = toDoTasks.data;
    }

    if (onProgressTasks.status === 200) {
      this.onProgressTasks = onProgressTasks.data;
    }

    if (doneTasks.status === 200) {
      this.doneTasks = doneTasks.data;
    }
  },

  watch: {
    search: async function () {
      if (this.search !== '') {
        const res = await this.callApi('GET', `https://to-do-app-vianova.herokuapp.com/api/v1/task/${this.search}/search`);
        if (res.status === 200) {
          console.log(res.data)
          this.doneTasks = res.data.data;
        }
      } else {
        const doneTasks = await this.callApi('GET', 'https://to-do-app-vianova.herokuapp.com/api/v1/task/3/all');
        this.doneTasks = doneTasks.data;
      }
    }
  }

};
</script>

<style type="css">

.column {
  min-height: 250px;
}

.low {
  background-color: #03a5fc !important;
}

.medium {
  background-color: #fc8803 !important;
}

.high {
  background-color: #fc1c03 !important;
}

.low, .medium, .high {
  color: #ffffff;
}

.arrow_un_active{
  color: #bababa;
}


</style>