import React, { use, useEffect, useState } from "react";

import Service from "../utils/http";
import { Center, Container, Text } from "@mantine/core";
import { Avatar } from "@mantine/core";
const obj = new Service();

export default function Profile() {
  const [user, setUser] = useState({});

  const getProfileData = async () => {
    try {
      let data = await obj.get("user/me");
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      {
        <Center style={{ height: "80vh", width: "100%" }}>
          <Container
            size="responsive"
            bg="#a5d8ff"
            style={{
              borderRadius: "20px",
              padding: "20px",
              //   paddingTop: "10px",
            }}
          >
            <Center height="10vh" mt={20} mb={20}>
              <Avatar
                src="https://lh3.googleusercontent.com/a/ACg8ocIJ2gqEee6oy72zS0Vfs_XKHY-lgQd7lqbtGgQMayOVM9LkuQ=s96-c"
                alt="it's me"
                size={150}
              />
            </Center>
            <Center>
              <Text
                size="xl"
                fw={900}
                variant="gradient"
                gradient={{
                  from: "rgb(0, 0, 0)",
                  to: "rgb(0, 0, 0)",
                  deg: 90,
                }}
              >
                {user?.name}
              </Text>
            </Center>

            <Center>
              <Text
                size="xl"
                fw={700}
                variant="gradient"
                gradient={{
                  from: "rgba(0, 0, 0, 1)",
                  to: "rgb(9, 9, 9)",
                  deg: 90,
                }}
              >
                Email: {user?.email}
              </Text>

              <br />
            </Center>
            <Center>
              <Text fw={900}>Id: {user?._id}</Text>
            </Center>

            <Center>
              <Text fw={700}>Created At: {user?.createdAt}</Text>
            </Center>
            <br />
            {/* </Center> */}
          </Container>
        </Center>
      }
    </div>
  );
}