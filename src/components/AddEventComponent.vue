<template>
  <div>
    <h3>Log New Event</h3>
    <form @submit.prevent="addEvent">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="eventType">Event Type:</label>
          <select class="form-control" id="eventSelectControl" v-model="event.type">
            <option>Lunch &amp; Learn</option>
            <option>Coding Challenge</option>
            <option>Math Challenge</option>
            <option>Bench Learning</option>
            <option>Bench Project</option>
            <option>Daugherty Event</option>
            <option>Daugherty University</option>
            <option>Daugherty Meetup</option>
            <option>Evening Courses</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label>Date:</label>
          <date-picker v-model="event.date" :config="options"></date-picker>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <ckeditor :editor="editor" v-model="event.body" :config="editorConfig"></ckeditor>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Add Event</button>
      </div>
    </form>
  </div>
</template>

<script>
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      date: new Date(),
      options: {
        format: "MM/DD/YYYY",
        useCurrent: true
      },
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
        placeholder: "Additional event notes..."
      },
      event: {}
    };
  },
  methods: {
    addEvent() {
      // console.log(this.event);
      // let uri = "http://localhost:4000/events/add";
      // this.axios.post(uri, this.event).then(() => {
      //   this.$router.push({ name: "events" });
      // });
    }
  },
  components: {
    datePicker
  }
};
</script>

<style>
</style>