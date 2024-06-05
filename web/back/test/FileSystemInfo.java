import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileSystemInfo {
    public static void main(String[] args) {
        // 루트 디렉토리 경로 가져오기
        Path rootPath = Paths.get("/");

        // 루트 디렉토리 파일 객체 생성
        File rootDir = rootPath.toFile();

        // 루트 디렉토리 정보 출력
        System.out.println("Root Directory: " + rootDir.getAbsolutePath());
        System.out.println("Is Directory? " + rootDir.isDirectory());
        System.out.println("Can Read? " + rootDir.canRead());
        System.out.println("Can Write? " + rootDir.canWrite());
        System.out.println("Can Execute? " + rootDir.canExecute());

        // 루트 디렉토리의 하위 항목 출력 (최대 10개)
        System.out.println("\nContents of Root Directory:");
        File[] files = rootDir.listFiles();
        int count = 0;
        if (files != null) {
            for (File file : files) {
                System.out.println(file.getName());
                count++;
                if (count >= 10) break; // 최대 10개까지 출력
            }
        } else {
            System.out.println("Unable to list directory contents.");
        }

        // 루트 디렉토리에 tmp 디렉토리 생성
        File tmpDir = new File(rootDir, "tmp");
        if (!tmpDir.exists()) {
            boolean created = tmpDir.mkdir();
            if (created) {
                System.out.println("\n/tmp directory created successfully.");
            } else {
                System.out.println("\nFailed to create /tmp directory.");
                if (!rootDir.canWrite()) {
                    System.out.println("Permission denied: Cannot write to the root directory.");
                }
            }
        } else {
            System.out.println("\n/tmp directory already exists.");
        }
    }
}

