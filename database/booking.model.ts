import { Schema, model, models, Document, Types } from "mongoose";
import Event from "./event.model";

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Validate that referenced event exists before saving
BookingSchema.pre("save", async function (next) {
  try {
    const eventExists = await Event.findById(this.eventId);

    if (!eventExists) {
      return next(new Error("Referenced event does not exist"));
    }

    next();
  } catch (error) {
    next(error instanceof Error ? error : new Error("Event validation failed"));
  }
});

// Create index on eventId for efficient queries
BookingSchema.index({ eventId: 1 });

// Create compound index on eventId and createdAt for sorting bookings by event and date
BookingSchema.index({ eventId: 1, createdAt: -1 });

// Create index on email for efficient lookups
BookingSchema.index({ email: 1 });

// Ensure one booking per email per event
BookingSchema.index(
  { eventId: 1, email: 1 },
  { unique: true, name: "unique_event_email" }
);

const Booking = models.Booking || model<IBooking>("Booking", BookingSchema);

export default Booking;
