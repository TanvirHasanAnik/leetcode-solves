import { buildTreeBFS, TreeNode } from "./buildBinaryTreeBFS";
type TreeNode = typeof TreeNode

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null;
    if(root.val < key){
        root.right = deleteNode(root.right, key)
    }else if(root.val > key){
        root.left = deleteNode(root.left, key)
    }else{
        if(root.left === null){
            return root.right
        }
        if(root.right === null){
            return root.left
        }
        let cur = root.right

        while(cur.left){
            cur = cur.left
        }
        root.val = cur.val

        root.right = deleteNode(root.right, cur.val)

    }
    return root
    
};

console.log(deleteNode(buildTreeBFS([5,3,6,2,4,null,7]),3))