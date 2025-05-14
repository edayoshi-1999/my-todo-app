// import prisma from "@/lib/prisma";

// export default async function Posts() {


// //  * Prisma ORMを使用してデータベースから投稿のリストを取得します。
// //  * 各投稿には関連付けられた著者情報が含まれます。
//   const posts = await prisma.post.findMany({
//     include: {
//       author: true,
//     },
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
//       <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
//         Posts
//       </h1>
//       <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
//         <li>My first post</li>

//         {/* posts 配列をmap()メソッドでループし、各投稿のタイトルと著者名を表示 */}
//         {posts.map((post) => (
//             <div className="flex flex-col items-start justify-start">
//                 <p>------------------------</p>
//                 <li key={post.id}>
//                     <span className="font-semibold">{post.title}</span>
//                     <span className="text-sm text-gray-600 ml-2">
//                     by {post.author.name}
//                     </span>
//                 </li>
//                 <p>------------------------</p>
//             </div>
//         ))}
//       </ul>
//     </div>
//   );
// }