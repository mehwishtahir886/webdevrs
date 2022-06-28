import mongoose from 'mongoose'

const StudentSchema = mongoose.Schema(
          {
                    firstName: {
                              type: String,
                              required: true,
                    },
                    lastName: {
                              type: String,
                              required: true,
                    },
                    email: {
                              type: String,
                              required: true,
                              unique: true,
                    },
                    phone: {
                              type: String,
                              required: true,
                              unique: true,
                    },
                    qualification: {
                              type: String,
                              required: true,
                    },
                    course: {
                              type: String,
                              required: true,
                    },
                    timeSlot: {
                              type: String,
                              required: true,
                    },
                    Fees: {
                              type: String,
                              required: true,
                    },
                    
                    

          },
          {
                    timestamps: true,
          }
)

export default StudentSchema