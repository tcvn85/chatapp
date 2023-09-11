import mongoose, { Schema, models } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    provider: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

const User = models.User || mongoose.model('User', userSchema)
export default User
