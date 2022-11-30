const { Schema, model } = require("mongoose");

const migraineSchema = new Schema(
    {
        start_date: {
            type: Date,
            required: true,
            default: Date.now,
        },
        end_date: {
            type: Date,
        },
        intensity: {
            type: Number,
            min: 0,
            max: 10
        },
        phases: [{
            type: String,
            enum: ["Prodrome", "Aura", "Headache", "Postdrome", "Other/Unsure"]
        }],
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        selected_trackers: [{
            type: Schema.types.ObjectId,
            ref: "Tracker"
        }],
        selected_treatments: [{
            type: Schema.types.ObjectId,
            ref: "Treatment"
        }],
        main_trigger: {
            type: Schema.types.ObjectId,
            ref: "Tracker"
        },
        notes: {
            type: String,
            maxLength: 1000
        }
    },
    {
        // `createdAt` and `updatedAt`
        timestamps: true,
    }
);

module.exports = model("Migraine", migraineSchema);
