import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  Button,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const ViewTestimonial = ({ testimonials, onDelete, onEdit }) => {
    return (
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y bg-blue-gray-50/50 p-4">Image</th>
                <th className="border-y bg-blue-gray-50/50 p-4">Name</th>
                <th className="border-y bg-blue-gray-50/50 p-4">Position</th>
                <th className="border-y bg-blue-gray-50/50 p-4">Description</th>
                <th className="border-y bg-blue-gray-50/50 p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map(({ id, name, position, description, image }) => (
                <tr key={id}>
                  <td className="p-4">
                    <Avatar src={image} alt={name} size="sm" />
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {position}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {description}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Tooltip content="Edit Testimonial">
                      <Button onClick={() => onEdit({ id, name, position, description, image })} size="sm" variant="outlined" className="mr-2">
                        Edit
                      </Button>
                    </Tooltip>
                    <Tooltip content="Delete Testimonial">
                      <Button onClick={() => onDelete(id)} size="sm" variant="outlined" color="red">
                        Delete
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    );
  };
  
  export default ViewTestimonial;
