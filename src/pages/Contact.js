import {
  Card,
  CardHeader,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export function ContactForm() {
  //Discord Bot Webhook
  const [tag, setTag] = useState();
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [dueDate, setDueDate] = useState();

  const send = () => {
    if (tag && title && details && dueDate) {
      const request = {
        content: "New Graphics Request!",
        embeds: [
          {
            title: title,
            description: details,
            footer: {
              text: "Due Date: " + dueDate + " | Requested by: " + tag,
            },
          },
        ],
      };

      fetch(
        "https://discord.com/api/webhooks/1172330209236758608/mtCAlPZdcUZ0X35_UeoHS8OmzSkM0048D_XIz_4zSKXuhUdZswTnj5Rd6Lb1KQFg7HLp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }
      ).then((res) => {
        setTag("");
        setTitle("");
        setDetails("");
        setDueDate("");
        alert("Your request has been submitted!");
      });
    } else {
      alert("Please try again.");
    }
  };
  //End of Discord Bot Webhook

  return (
    <Card shadow={true} className="p-9">
      <CardHeader className="h-30 w-30 ">
        <img
          src="https://pbs.twimg.com/profile_images/1642440108082348034/I_Ctyvu2_400x400.jpg"
          align-items="center"
          justify-content="center"
          alt="logo"
        />
      </CardHeader>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <Typography variant="h4" color="#c2af30">
          Graphics Request Form
        </Typography>
        <Typography color="#c2af30" className="mt-1 font-normal">
          Slug Gaming Community
        </Typography>
        <div className="mb-1 flex flex-col gap-6 pt-1">
          <Typography variant="h6" color="#c2af30" className="-mb-3">
            Discord Tag
          </Typography>
          <Input
            size="lg"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Discord Tag"
            className=" focus:!border-t-gray-900 !border-t-white-200"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="#c2af30" className="-mb-3">
            Title
          </Typography>
          <Input
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title here"
            className=" !border-t-white-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="#c2af30" className="-mb-3">
            Details
          </Typography>
          <Input
            type="textarea"
            size="lg"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Provide details about your request here."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Typography variant="h6" color="#c2af30" className="-mb-3 pt-2">
          Due Date (before end of the day):
        </Typography>
        <input
          type="date"
          className="mt-4"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button className="mt-6" fullWidth color="yellow" onClick={send}>
          Submit Request
        </Button>
      </form>
    </Card>
  );
}
