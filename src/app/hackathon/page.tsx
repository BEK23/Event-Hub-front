import { getUsers } from "@/api/users";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";

export default async function HackathonPage() {
  const { data } = await getUsers();
  const users = data.data;

  return (
    <div className="space-y-4 mt-4">
      {users.map((user) => {
        return (
          <div key={user.tg_id} className="flex gap-4 items-center">
            <Avatar
              size="lg"
              src={user.avatar_url}
              classNames={{ base: "shrink-0" }}
            />
            <div>
              <h2 className="text-lg font-semibold">{user.full_name}</h2>
              {user.username ? (
                <Link
                  href={`https://t.me/${user.username}`}
                  className="text-primary"
                >
                  @{user.username}
                </Link>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
