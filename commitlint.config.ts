export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"body-leading-blank": [2, "always"], // Phải có dòng trống trước phần thân commit
		"footer-leading-blank": [1, "always"], // Phải có dòng trống trước phần footer commit
		"header-max-length": [2, "always", 108], // Giới hạn độ dài tiêu đề commit là 108 ký tự
		"subject-empty": [2, "never"], // Tiêu đề commit không được để trống
		"type-empty": [2, "never"], // Loại commit không được để trống
		"type-enum": [
			2,
			"always",
			[
				"feat", // Tính năng mới
				"fix", // Sửa lỗi
				"perf", // Tối ưu hiệu suất
				"style", // Thay đổi về mặt giao diện (không ảnh hưởng đến logic)
				"docs", // Cập nhật tài liệu
				"test", // Thêm hoặc cập nhật các bài kiểm tra
				"refactor", // Tái cấu trúc mã nguồn (không sửa lỗi hoặc thêm tính năng)
				"build", // Thay đổi liên quan đến hệ thống build hoặc các công cụ bên ngoài
				"ci", // Thay đổi liên quan đến Continuous Integration
				"chore", // Công việc bảo trì
				"revert", // Hoàn tác thay đổi
				"wip", // Công việc đang thực hiện dở
				"workflow", // Thay đổi liên quan đến quy trình làm việc
				"types", // Thay đổi liên quan đến kiểu dữ liệu
				"release", // Phát hành phiên bản mới
			],
		],
	},
};
