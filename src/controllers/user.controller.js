const prisma = require("../prisma/client");

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // lấy từ token
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email không được để trống" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { email },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    res.json({
      message: "Cập nhật profile thành công",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
