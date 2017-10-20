var mongoose=require("mongoose");

var clientSchema=new mongoose.Schema({
	firstName:String,
	lastName:String,
	phone:String,
	medicaidNumber:String,
	diagnosis:[],
	beaconId:String,
	guardian:String,
	photo:String,
	deactivationSuperuser:String,
	approvals:
		[{
			number:String,
			startDate:Date,
			endDate:Date,
			units:Number,
			procedure:String,
			availableUnits:Number
		}],
	maladaptativeBehaviors:
		[{
			name:String,
			baseline:String,
			dateCreated:{type:Date,default:Date.now()},
			STOS:[
				{
					value:String,
					duration:String,
					current:Boolean
				}
			],
			measurement:String,
			intensity:String
		}],
	replacementsBehaviors:
		[{
			name:String,
			baseline:String,
			dateCreated:{type:Date,default:Date.now()},
			STOS:[
				{
					value:String,
					duration:String,
					current:Boolean
				}
			],
			measurement:String
		}],
	assistant:
		{
			firstName:{type:String,default:""},
			lastName:{type:String,default:""}
		},
	analyst:
		{
			firstName:{type:String,default:""},
			lastName:{type:String,default:""}
		},
	assistantReports:
		[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:"Report"
			},

		],
	analystReports:
		[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:"Report"
			},

		]
        
});

module.exports=mongoose.model("Client",clientSchema);