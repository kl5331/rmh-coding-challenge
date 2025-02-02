import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import Head from 'next/head';
import TopBar from '@/components/TopBar';
import SideBar from "@/components/SideBar";
import {User} from "@/app/pt-portal/models";
import {getUsers} from "@/app/pt-portal/getUsers";

export default async function PTPortal() {
    const ptID: string = '6b87d552-a2fe-465a-998c-1b288fee212f';
    const users: User[] = await getUsers(ptID);
  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex min-h-screen w-full">
          <SideBar users={users} />
      </main>

    </section>
  );
}
