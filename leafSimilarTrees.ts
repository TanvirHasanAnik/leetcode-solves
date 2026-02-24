 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];

  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift()!;

    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]!);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]!);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

function getLeafNodes(root: TreeNode | null): number[] {
  const leaves: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    // Check if it's a leaf
    if (!node.left && !node.right) {
      leaves.push(node.val);
      return;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return leaves;
}




function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const root1Leaves = getLeafNodes(root1)
    const root2Leaves = getLeafNodes(root2)
    console.log(root1Leaves,root2Leaves)
    if (root1Leaves.length !== root2Leaves.length) return false;

    for (let i = 0; i < root1Leaves.length; i++) {
        if (root1Leaves[i] !== root2Leaves[i]) return false;
    }
    return true
};

console.log(leafSimilar(arrayToTree([3,5,1,6,2,9,8,null,null,7,4]), arrayToTree([3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])))